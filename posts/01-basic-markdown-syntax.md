---
title: "Complete Markdown Syntax Guide"
description: "A comprehensive guide covering all basic Markdown syntax elements including headings, text formatting, lists, links, and more."
date: "2024-06-10"
author: "GitHub Copilot"
tags: 
  - markdown
  - syntax
  - basics
  - documentation
  - tutorial
category: "tutorial"
featured: true
---

# Complete Markdown Syntax Guide

## Table of Contents
- [Headings](#headings)
- [Text Formatting](#text-formatting)
- [Lists](#lists)
- [Links and References](#links-and-references)
- [Horizontal Rules](#horizontal-rules)
- [Line Breaks](#line-breaks)

## Headings

# H1 - Main Title
## H2 - Section Title  
### H3 - Subsection Title
#### H4 - Sub-subsection Title
##### H5 - Minor Heading
###### H6 - Smallest Heading

Alternative H1
==============

Alternative H2
--------------

## Text Formatting

**Bold text** or __also bold text__

*Italic text* or _also italic text_

***Bold and italic*** or ___also bold and italic___

~~Strikethrough text~~

`Inline code`

Regular text with **bold**, *italic*, and `code` mixed together.

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
    - Deeply nested item 2.2.1
    - Deeply nested item 2.2.2
- Item 3

Alternative syntax:
* Item A
* Item B
  + Nested item B.1
  + Nested item B.2

### Ordered Lists

1. First item
2. Second item
   1. Nested ordered item
   2. Another nested item
      1. Deep nesting
      2. More deep nesting
3. Third item

List with different numbering:
1. Item
3. Item (number doesn't matter)
7. Item (Markdown auto-numbers)

### Task Lists (GitHub Flavored Markdown)

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
  - [ ] Nested incomplete task
  - [x] Nested completed task

## Links and References

### Direct Links
[OpenAI](https://openai.com)

[Link with title](https://github.com "GitHub Homepage")

### Reference-style Links
[Reference link][1]
[Another reference][link-ref]
[Case-insensitive reference][CASE-REF]

[1]: https://example.com
[link-ref]: https://markdown.org
[CASE-REF]: https://daringfireball.net/projects/markdown/

### Automatic Links
<https://github.com>
<email@example.com>

### URLs and Email
Visit https://github.com or email me at test@example.com

## Horizontal Rules

Three or more hyphens:
---

Three or more asterisks:
***

Three or more underscores:
___

## Line Breaks

This is line one.  
This line has two spaces at the end to create a line break.

This is a new paragraph.

You can also use a backslash\
for line breaks.

## Escaping Characters

\*This is not italic\*
\# This is not a heading
\[This is not a link\](example.com)

## Footnotes (if supported)

Here's a sentence with a footnote[^1].

Here's another footnote[^note].

[^1]: This is the first footnote.
[^note]: This is another footnote with a descriptive name.

---

*This post demonstrates the fundamental Markdown syntax elements that work across most Markdown processors.*