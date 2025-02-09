const fs = require('fs');
const path = require('path');
const marked = require('marked');
const puppeteer = require('puppeteer');

async function convertToPDF(lang, inputFile, outputFile) {
  try {
    // Read markdown content
    const markdown = fs.readFileSync(inputFile, 'utf-8');

    // Convert markdown to HTML
    const html = marked.parse(markdown);

    // Add styling
    const styledHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            @font-face {
              font-family: 'Noto Sans CJK SC';
              src: local('Noto Sans CJK SC');
            }
            body {
              font-family: ${
                lang === 'zh' ? "'Noto Sans CJK SC'" : 'Arial'
              }, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              line-height: 1.6;
            }
            * {
              font-family: inherit;
            }
            pre {
              background: #f6f8fa;
              padding: 16px;
              border-radius: 4px;
              overflow-x: auto;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin: 16px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background: #f6f8fa;
            }
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;

    // Launch browser and create PDF
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--font-render-hinting=none'],
    });
    const page = await browser.newPage();
    await page.setContent(styledHtml);

    // Ensure fonts are loaded
    await page.evaluateHandle('document.fonts.ready');

    await page.pdf({
      path: outputFile,
      format: 'A4',
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
      printBackground: true,
    });
    await browser.close();

    return true;
  } catch (error) {
    console.error(`Error converting ${inputFile}:`, error);
    return false;
  }
}

// Get command line arguments
const [, , lang, inputFile, outputFile] = process.argv;

// Run conversion
convertToPDF(lang, inputFile, outputFile);
