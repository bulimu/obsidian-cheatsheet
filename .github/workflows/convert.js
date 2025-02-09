const fs = require('fs');
const path = require('path');
const marked = require('marked');
const puppeteer = require('puppeteer');

const style = `
<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  }
  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
    margin-bottom: 16px;
  }
  .markdown-body table th,
  .markdown-body table td {
    padding: 6px 13px;
    border: 1px solid #d0d7de;
  }
  .markdown-body table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }
  :lang(zh) { font-family: "Noto Sans SC", sans-serif; }
</style>
`;

async function convertToPDF(inputFile, outputFile, lang) {
  try {
    // Read and convert markdown to HTML
    const markdown = fs.readFileSync(inputFile, 'utf-8');
    const html = `
      <!DOCTYPE html>
      <html lang="${lang}">
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css/github-markdown.min.css">
        ${style}
      </head>
      <body class="markdown-body">
        ${marked.parse(markdown)}
      </body>
      </html>
    `;

    // Launch browser
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set content and wait for network idle
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    await page.pdf({
      path: outputFile,
      format: 'A4',
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
      printBackground: true
    });

    await browser.close();
    return true;
  } catch (error) {
    console.error(`Error converting ${inputFile}:`, error);
    return false;
  }
}

// Process command line arguments
const [,, lang, inputFile, outputFile] = process.argv;
convertToPDF(inputFile, outputFile, lang).then(success => {
  process.exit(success ? 0 : 1);
}); 