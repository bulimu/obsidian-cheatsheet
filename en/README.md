# Obsidian Cheatsheet

## Table of Contents

- [Obsidian Cheatsheet](#obsidian-cheatsheet)
  - [Table of Contents](#table-of-contents)
    - [Basic Operations](#basic-operations)
    - [Formatting](#formatting)
    - [Lists and Tasks](#lists-and-tasks)
    - [Links and References](#links-and-references)
    - [Recommended Plugins](#recommended-plugins)
    - [Theme Settings](#theme-settings)

---

### Basic Operations

| Function            | Shortcut/Syntax          | Description                           |
| ------------------- | ------------------------ | ------------------------------------- |
| Create New Note     | `Ctrl/Cmd + N`           | Press shortcut                        |
| Open Note           | `Ctrl/Cmd + O`           | Quick switcher                        |
| Save Note           | `Ctrl/Cmd + S`           | Save current note                     |
| Toggle Edit/Preview | `Ctrl/Cmd + E`           | Switch between edit and preview modes |
| Search Current Note | `Ctrl/Cmd + F`           | Find content in current note          |
| Global Search       | `Ctrl/Cmd + Shift + F`   | Search in all files                   |
| Command Palette     | `Ctrl/Cmd + P`           | Quick execute commands                |
| Go Back             | `Ctrl/Cmd + Alt + ←`     | Return to previous location           |
| Fold/Unfold Header  | `Ctrl/Cmd + Click Title` | Quick fold/unfold content under title |
| New Tab             | `Ctrl/Cmd + T`           | Open in new tab                       |
| Close Current Tab   | `Ctrl/Cmd + W`           | Close current tab                     |

### Formatting

| Format            | Syntax                     | Example                                            |
| ----------------- | -------------------------- | -------------------------------------------------- |
| Headings 1-6      | `# Text` to `###### Text`  | `# Heading 1`, `## Heading 2`, `### Heading 3` ... |
| Bold              | `**Text**`                 | **Text**                                           |
| Italic            | `*Text*`                   | _Text_                                             |
| Strikethrough     | `~~Text~~`                 | ~~Text~~                                           |
| Highlight         | `==Text==`                 | ==Text==                                           |
| Code              | `` `code` ``               | `` `print("Hello")` `` shows as `print("Hello")`   |
| Code Blocks       | ` ```code``` `             | ` ```print("Hello")``` ` shows as `print("Hello")` |
| Divider           | `---` or `***`             | Horizontal Separator                               |
| Quote/Blockquotes | `> Quote text`             | `> This is a quote`                                |
| Table             | `\| Header1 \| Header2 \|` | Header                                             |
|                   | `\|---\|---\|`             | Separator (min 3 dashes)                           |
|                   | `\| Cell 1 \| Cell 2 \|`   | Content                                            |

Table Alignment:

- Left align: `:---`
- Right align: `---:`
- Center: `:---:`

Table Example:

```markdown
| Left | Center | Right |
| :--- | :----: | ----: |
| cell |  cell  |  cell |
```

| Left | Center | Right |
| :--- | :----: | ----: |
| cell |  cell  |  cell |

**Headings**

> # Heading 1
>
> ## Heading 2
>
> ### Heading 3
>
> ......

### Lists and Tasks

| Type          | Syntax               | Example  |
| ------------- | -------------------- | -------- |
| Unordered     | `- Item` or `* Item` | • Item   |
| Ordered       | `1. Item`            | 1. Item  |
| Task          | `- [ ] Task`         | ☐ Task   |
| Complete Task | `- [x] Task`         | ☑ Task   |
| Nested List   | Indent 2 spaces      | Sub-list |

### Links and References

| Type            | Syntax                   | Description                                                                  |
| --------------- | ------------------------ | ---------------------------------------------------------------------------- |
| Internal Link   | `[[Note Name]]`          | `[[Note-2025]]` links to `Note-2025`                                         |
| Aliased Link    | `[[Note Name\|Display]]` | `[[Note-2025\|My Note]]` shows as [[Note-2025\|My Note]]                     |
| External Link   | `[Display](URL)`         | `[Google](https://www.google.com)` shows as [Google](https://www.google.com) |
| Embed Note      | `![[Note Name]]`         | `![[Note-2025]]` embeds content of `Note-2025`                               |
| Tag             | `#tag`                   | `#todo` creates tag, click to search all notes with `#todo`                  |
| Block Reference | `![[Note Name^blockID]]` | Add `^block-id` after paragraph, reference via `[[Note^block-id]]`           |
| Header Link     | `[[Note Name#Heading]]`  | `[[Note-2025#Header]]` links to `## Heading` in `Note-2025`                  |

### Recommended Plugins

| Plugin Name | Type      | Main Function      |
| ----------- | --------- | ------------------ |
| Dataview    | Community | Data Query & Stats |
| Calendar    | Community | Calendar View      |
| Kanban      | Community | Kanban Board       |
| Mind Map    | Community | Mind Map View      |
| Templates   | Core      | Template System    |
| Daily notes | Core      | Daily Notes        |
| Graph view  | Core      | Graph View         |

### Theme Settings

1. Open Settings: `Ctrl/Cmd + ,`
2. Select `Appearance` in left menu
3. Click `Manage` in Themes section
4. Search themes in marketplace
5. Click `Install` and `Use`

**Recommended Themes**

| Theme Name | Feature       | Use Case       |
| ---------- | ------------- | -------------- |
| Minimal    | Clean & Light | Daily Notes    |
| Blue Topaz | Feature Rich  | Knowledge Base |
| Primary    | Modern Design | Writing        |
| Things     | Elegant       | Academic       |
