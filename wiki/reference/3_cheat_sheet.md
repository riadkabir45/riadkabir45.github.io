---
title: "Markdown Cheat Sheet"
description: "Quick reference for all essential Markdown syntax elements"
date: "2024-12-01"
author: "Wiki Team"
tags: 
  - markdown
  - cheat-sheet
  - quick-reference
  - syntax
category: "reference"
featured: true
---

# Markdown Cheat Sheet

Quick reference guide for all essential Markdown syntax elements. Perfect for printing or keeping open while writing.

## Headers

```markdown
# H1 Header
## H2 Header  
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
```

## Text Formatting

| Syntax | Result |
|:-------|:-------|
| `**Bold text**` | **Bold text** |
| `*Italic text*` | *Italic text* |
| `***Bold italic***` | ***Bold italic*** |
| `~~Strikethrough~~` | ~~Strikethrough~~ |
| `==Highlight==` | ==Highlight== |
| `` `Inline code` `` | `Inline code` |

## Lists

### Unordered Lists
```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3
```

### Ordered Lists
```markdown
1. First item
2. Second item
   1. Nested item
   2. Another nested item
3. Third item
```

### Task Lists
```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

## Links

| Type | Syntax | Result |
|:-----|:-------|:-------|
| Basic | `[Text](url)` | [Text](url) |
| With title | `[Text](url "Title")` | [Text](url "Title") |
| Reference | `[Text][ref]` then `[ref]: url` | [Text][ref] |
| Auto | `<https://example.com>` | <https://example.com> |
| Email | `<email@example.com>` | <email@example.com> |

## Images

| Type | Syntax |
|:-----|:-------|
| Basic | `![Alt text](image.jpg)` |
| With title | `![Alt text](image.jpg "Title")` |
| Reference | `![Alt text][img1]` then `[img1]: image.jpg` |
| Linked | `[![Alt](img.jpg)](link)` |

## Code

### Inline Code
```markdown
Use `code` in sentences.
```

### Code Blocks
````markdown
```
Basic code block
```

```javascript
// With syntax highlighting
function hello() {
    console.log("Hello!");
}
```
````

## Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|:---------|:--------:|---------:|
| Left     | Center   | Right    |
| align    | align    | align    |
```

**Alignment:**
- `:---` → Left align
- `:---:` → Center align  
- `---:` → Right align

## Blockquotes

```markdown
> Single line quote

> Multi-line quote
> continues here

> **Nested quotes**
>> Second level
>>> Third level
```

## Horizontal Rules

```markdown
---
***
___
```

## Line Breaks

| Type | Syntax |
|:-----|:-------|
| Soft break | `Line 1\nLine 2` |
| Hard break | `Line 1  \nLine 2` (2 spaces) |
| Paragraph | `Para 1\n\nPara 2` (blank line) |

## HTML Elements

```markdown
<u>Underlined</u>
<mark>Highlighted</mark>
H<sub>2</sub>O
E=mc<sup>2</sup>
<kbd>Ctrl</kbd>+<kbd>C</kbd>

<details>
<summary>Collapsible section</summary>
Hidden content here
</details>
```

## Extended Syntax

### Footnotes
```markdown
Text with footnote[^1].

[^1]: Footnote content.
```

### Definition Lists
```markdown
Term
: Definition
```

### Emoji
```markdown
:smile: :heart: :+1:
😀 ❤️ 👍
```

### Math
```markdown
Inline: $E = mc^2$

Block:
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$
```

## Escape Characters

Use `\` before these characters to display them literally:

```markdown
\* \_ \# \+ \- \. \! \[ \] \( \) \{ \} \| \` \~ \\ \^
```

## Common Combinations

### Documentation Header
```markdown
---
title: "Document Title"
date: "2024-12-01"
author: "Author Name"
---

# Document Title

Brief description of the document.

## Table of Contents
- [Section 1](#section-1)
- [Section 2](#section-2)
```

### Code Documentation
````markdown
## Function Name

Description of what the function does.

### Parameters
- `param1` (string): Description
- `param2` (number): Description  

### Example
```javascript
const result = functionName("hello", 42);
console.log(result);
```

### Returns
Returns a boolean indicating success.
````

### Alert Boxes
```markdown
> **Note**  
> This is important information.

> **Warning**  
> Proceed with caution.

> **Tip**  
> Pro tip for better results.
```

## Quick Formatting

| Element | Shortcut | Example |
|:--------|:---------|:--------|
| Bold | `Ctrl/Cmd + B` | `**text**` |
| Italic | `Ctrl/Cmd + I` | `*text*` |
| Code | `Ctrl/Cmd + E` | `` `text` `` |
| Link | `Ctrl/Cmd + K` | `[text](url)` |

## File Structure Template

```markdown
# Project Name

Brief project description.

## Installation

```bash
npm install project-name
```

## Usage

```javascript
import { feature } from 'project-name';

const result = feature('input');
```

## API Reference

### Method Name

Description

#### Parameters
- `param` (type): Description

#### Returns
Type: Description

## Examples

### Basic Example
Code example here

### Advanced Example  
More complex example

## Contributing

Guidelines for contributors.

## License

License information.
```

## Troubleshooting

### Common Issues

| Problem | Solution |
|:--------|:---------|
| Links not working | Check for spaces in URLs, use `%20` |
| Images not displaying | Verify file path and extension |
| Table not formatting | Ensure header separator row |
| Code not highlighting | Check language identifier spelling |
| Lists not nesting | Use consistent indentation (2 or 4 spaces) |

### Platform Differences

| Feature | GitHub | GitLab | Standard |
|:--------|:------:|:------:|:--------:|
| Task lists | ✅ | ✅ | ❌ |
| Tables | ✅ | ✅ | Extension |
| Math | ❌ | ✅ | Extension |
| Footnotes | ❌ | ✅ | Extension |
| Emoji shortcuts | ✅ | ✅ | ❌ |

## Best Practices Summary

✅ **Do:**
- Use consistent formatting
- Include alt text for images
- Specify language for code blocks
- Use descriptive link text
- Follow header hierarchy
- Keep lines under 80-120 characters

❌ **Don't:**
- Mix formatting styles in one document
- Skip header levels
- Use "click here" for links
- Forget to test links
- Overuse formatting
- Leave code blocks without language specification

## Useful Resources

- [CommonMark Spec](https://commonmark.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Dillinger Online Editor](https://dillinger.io/)

---

**Print Version**: This cheat sheet is designed to be printer-friendly. Print in landscape mode for best results.

*Keep this reference handy while writing Markdown documents!*