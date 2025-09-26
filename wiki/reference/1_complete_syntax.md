---
title: "Complete Markdown Syntax Reference"
description: "Comprehensive reference guide covering all Markdown syntax elements and features"
date: "2024-12-01"
author: "Wiki Team"
tags: 
  - markdown
  - reference
  - syntax
  - guide
  - complete
category: "reference"
featured: true
---

# Complete Markdown Syntax Reference

A comprehensive reference guide covering all Markdown syntax elements, from basic formatting to advanced features.

## Table of Contents

- [Headers](#headers)
- [Text Formatting](#text-formatting)
- [Lists](#lists)
- [Links](#links)
- [Images](#images)
- [Code](#code)
- [Tables](#tables)
- [Blockquotes](#blockquotes)
- [Horizontal Rules](#horizontal-rules)
- [HTML Elements](#html-elements)
- [Extended Syntax](#extended-syntax)

## Headers

```markdown
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header

Alternative H1
==============

Alternative H2
--------------
```

**Result:**
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header

## Text Formatting

### Basic Emphasis

```markdown
**Bold text**
__Also bold__
*Italic text*
_Also italic_
***Bold and italic***
~~Strikethrough~~
```

**Result:**
**Bold text**
__Also bold__
*Italic text*
_Also italic_
***Bold and italic***
~~Strikethrough~~

### Advanced Formatting

```markdown
==Highlighted text==
H<sub>2</sub>O
E=mc<sup>2</sup>
<u>Underlined text</u>
<mark>Marked text</mark>
```

**Result:**
==Highlighted text==
H<sub>2</sub>O
E=mc<sup>2</sup>
<u>Underlined text</u>
<mark>Marked text</mark>

## Lists

### Unordered Lists

```markdown
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
    - Deep nested item
- Item 3

* Alternative syntax
+ Another alternative
```

**Result:**
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
    - Deep nested item
- Item 3

### Ordered Lists

```markdown
1. First item
2. Second item
   1. Nested numbered item
   2. Another nested item
3. Third item

1. You can use
1. The same number
1. For all items
```

**Result:**
1. First item
2. Second item
   1. Nested numbered item
   2. Another nested item
3. Third item

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task
  - [x] Nested completed task
  - [ ] Nested incomplete task
```

**Result:**
- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task
  - [x] Nested completed task
  - [ ] Nested incomplete task

### Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b
```

**Result:**
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Links

### Basic Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title text")
<https://example.com>
<email@example.com>
```

**Result:**
[Link text](https://example.com)
[Link with title](https://example.com "Title text")
<https://example.com>
<email@example.com>

### Reference Links

```markdown
[Reference link][1]
[Link with text][link text]
[Link using link text as reference]

[1]: https://example.com
[link text]: https://example.com "Optional title"
[Link using link text as reference]: https://example.com
```

**Result:**
[Reference link][1]
[Link with text][link text]
[Link using link text as reference]

[1]: https://example.com
[link text]: https://example.com "Optional title"
[Link using link text as reference]: https://example.com

### Internal Links

```markdown
[Link to header](#headers)
[Link to section](#text-formatting)
```

**Result:**
[Link to header](#headers)
[Link to section](#text-formatting)

## Images

### Basic Images

```markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Image title")
```

### Reference Images

```markdown
![Reference image][image1]
![Another image][image2]

[image1]: image1.jpg "Title 1"
[image2]: image2.jpg "Title 2"
```

### Images with Links

```markdown
[![Alt text](image.jpg)](https://example.com)
```

## Code

### Inline Code

```markdown
Use `inline code` for short snippets.
`console.log()` function outputs to console.
```

**Result:**
Use `inline code` for short snippets.
`console.log()` function outputs to console.

### Code Blocks

````markdown
```
Basic code block
without syntax highlighting
```

```javascript
// JavaScript code block
function hello() {
    console.log("Hello, World!");
}
```

```python
# Python code block
def hello():
    print("Hello, World!")
```
````

### Indented Code Blocks

```markdown
    Indented code block
    using 4 spaces or 1 tab
```

## Tables

### Basic Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | More data|
| Row 2    | Data     | More data|
```

**Result:**
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | More data|
| Row 2    | Data     | More data|

### Aligned Tables

```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| Text | Text   | Text  |
| More | More   | More  |
```

**Result:**
| Left | Center | Right |
|:-----|:------:|------:|
| Text | Text   | Text  |
| More | More   | More  |

## Blockquotes

### Basic Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.

> Nested blockquotes
>> are also possible
>>> with multiple levels
```

**Result:**
> This is a blockquote.
> It can span multiple lines.

> Nested blockquotes
>> are also possible
>>> with multiple levels

### Blockquotes with Other Elements

```markdown
> ## Header in blockquote
> 
> - List item 1
> - List item 2
> 
> **Bold text** in blockquote
```

**Result:**
> ## Header in blockquote
> 
> - List item 1
> - List item 2
> 
> **Bold text** in blockquote

## Horizontal Rules

```markdown
---

***

___

- - -

* * *
```

**Result:**
---

***

## HTML Elements

### Allowed HTML

```markdown
<div>HTML div element</div>
<span style="color: red;">Red text</span>
<kbd>Ctrl</kbd> + <kbd>C</kbd>
<details>
  <summary>Click to expand</summary>
  Hidden content here
</details>
```

**Result:**
<div>HTML div element</div>
<span style="color: red;">Red text</span>
<kbd>Ctrl</kbd> + <kbd>C</kbd>
<details>
  <summary>Click to expand</summary>
  Hidden content here
</details>

## Extended Syntax

### Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

**Result:**
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

### Emoji

```markdown
:smile: :heart: :thumbsup: :rocket:
😀 😍 👍 🚀
```

**Result:**
:smile: :heart: :thumbsup: :rocket:
😀 😍 👍 🚀

### Abbreviations

```markdown
*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

The HTML specification is maintained by the W3C.
```

### Admonitions/Alerts

```markdown
> **Note**
> This is a note admonition.

> **Warning**
> This is a warning admonition.

> **Tip**
> This is a tip admonition.
```

**Result:**
> **Note**
> This is a note admonition.

> **Warning**
> This is a warning admonition.

> **Tip**
> This is a tip admonition.

## Mathematical Expressions

### Inline Math

```markdown
The formula $E = mc^2$ is Einstein's mass-energy equivalence.
```

**Result:**
The formula $E = mc^2$ is Einstein's mass-energy equivalence.

### Block Math

```markdown
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$
```

**Result:**
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$

## Escape Characters

Use backslash to escape special characters:

```markdown
\*Not italic\*
\#Not a header
\`Not code\`
\[Not a link\]
\\Literal backslash
```

**Result:**
\*Not italic\*
\#Not a header
\`Not code\`
\[Not a link\]
\\Literal backslash

## Line Breaks

### Soft Line Break

```markdown
Line 1
Line 2 (no break)
```

**Result:**
Line 1
Line 2 (no break)

### Hard Line Break

```markdown
Line 1  
Line 2 (with break)

Line 3

Line 4 (paragraph break)
```

**Result:**
Line 1  
Line 2 (with break)

Line 3

Line 4 (paragraph break)

## Comments

```markdown
<!-- This is a comment -->
Visible text
<!-- Another comment -->
```

**Result:**
<!-- This is a comment -->
Visible text
<!-- Another comment -->

## Frontmatter

```markdown
---
title: "Document Title"
author: "Author Name"
date: "2024-12-01"
tags: [markdown, reference]
---

# Document Content
```

## Quick Reference

### Text Formatting
- `**bold**` or `__bold__` → **bold**
- `*italic*` or `_italic_` → *italic*
- `~~strikethrough~~` → ~~strikethrough~~
- `` `code` `` → `code`

### Headers
- `# H1` through `###### H6`

### Lists
- `- item` or `* item` → unordered
- `1. item` → ordered
- `- [ ] task` → task list

### Links & Images
- `[text](url)` → link
- `![alt](url)` → image

### Code Blocks
- ` ``` ` → code block
- ` ```lang ` → syntax highlighted

### Tables
- `| col | col |` with `|---|---|` separator

---

*This reference covers the most commonly used Markdown syntax. For platform-specific extensions, consult your Markdown processor's documentation.*