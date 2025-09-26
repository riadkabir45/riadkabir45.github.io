---
title: "Text Formatting in Markdown"
description: "Master text formatting with bold, italic, strikethrough, and other styling options"
date: "2024-12-01"
author: "Wiki Team"
tags: 
  - markdown
  - formatting
  - typography
  - styling
category: "tutorial"
featured: false
---

# Text Formatting in Markdown

Learn how to emphasize and style your text using Markdown's formatting syntax.

## Basic Text Emphasis

### Bold Text

Make text **bold** using double asterisks or underscores:

```markdown
**This text is bold**
__This text is also bold__
```

**Result:**
**This text is bold**
__This text is also bold__

### Italic Text

Make text *italic* using single asterisks or underscores:

```markdown
*This text is italic*
_This text is also italic_
```

**Result:**
*This text is italic*
_This text is also italic_

### Bold and Italic Combined

Combine both for ***bold and italic*** text:

```markdown
***Bold and italic text***
___Also bold and italic___
**Bold with *italic* inside**
*Italic with **bold** inside*
```

**Result:**
***Bold and italic text***
___Also bold and italic___
**Bold with *italic* inside**
*Italic with **bold** inside*

## Strikethrough

Cross out text using double tildes:

```markdown
~~This text is crossed out~~
~~Strikethrough~~ text for corrections
```

**Result:**
~~This text is crossed out~~
~~Strikethrough~~ text for corrections

## Underline

Standard Markdown doesn't support underline, but you can use HTML:

```markdown
<u>This text is underlined</u>
```

**Result:**
<u>This text is underlined</u>

## Subscript and Superscript

Use HTML tags for subscript and superscript:

```markdown
H<sub>2</sub>O (water)
E=mc<sup>2</sup> (Einstein's equation)
```

**Result:**
H<sub>2</sub>O (water)
E=mc<sup>2</sup> (Einstein's equation)

## Inline Code

Use backticks for `inline code`:

```markdown
Use the `print()` function to display text.
The `git commit` command saves changes.
```

**Result:**
Use the `print()` function to display text.
The `git commit` command saves changes.

## Highlighting

Some Markdown flavors support highlighting:

```markdown
==This text is highlighted==
```

**Result:**
==This text is highlighted==

## Escape Characters

Use backslashes to display special characters literally:

```markdown
\*Not italic\*
\*\*Not bold\*\*
\`Not code\`
\\Literal backslash
```

**Result:**
\*Not italic\*
\*\*Not bold\*\*
\`Not code\`
\\Literal backslash

## Combining Formatting

You can combine multiple formatting options:

```markdown
***~~Combined formatting~~*** with ~~strikethrough~~
`**Bold code**` (won't work - code overrides formatting)
**Bold text with `inline code` inside**
```

**Result:**
***~~Combined formatting~~*** with ~~strikethrough~~
`**Bold code**` (won't work - code overrides formatting)
**Bold text with `inline code` inside**

## Typography Best Practices

### Do:
- Use **bold** for important keywords and emphasis
- Use *italic* for foreign words, book titles, and subtle emphasis  
- Use `inline code` for variable names, functions, and file paths
- Use ~~strikethrough~~ for corrections or outdated information

### Don't:
- Overuse formatting - it loses impact
- Use ALL CAPS for emphasis (use bold instead)
- Mix underscores and asterisks inconsistently
- Use formatting inside code blocks (it won't work)

## Real-World Examples

### Documentation
```markdown
The **API endpoint** `/api/users` returns a JSON object.
Use the `--verbose` flag for detailed output.
~~Deprecated~~ methods should not be used.
```

### Blog Writing
```markdown
*Pride and Prejudice* is a classic novel by **Jane Austen**.
The term *schadenfreude* comes from German.
```

### Technical Notes
```markdown
Install using `npm install package-name`
Set the **NODE_ENV** variable to `production`
~~Old version~~ **New version available**
```

## Practice Exercise

Format this text using Markdown:

1. Make "Important" bold
2. Make "very carefully" italic  
3. Make "delete_user" inline code
4. Cross out "broken feature"
5. Combine bold and italic for "critical update"

```
Important: Read this very carefully before using the delete_user function.
The broken feature has been replaced with a critical update.
```

**Your solution:**
```markdown
**Important**: Read this *very carefully* before using the `delete_user` function.
The ~~broken feature~~ has been replaced with a ***critical update***.
```

---

*Previous: [First Steps](intro/1_first_chapter) | Next: [Advanced Tables](advanced/1_tables)*