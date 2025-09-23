---
title: "Images, Media, and HTML in Markdown"
description: "Learn how to embed images, media content, and HTML elements within Markdown documents for rich, interactive content."
date: "2024-06-14"
author: "GitHub Copilot"
tags: 
  - markdown
  - images
  - html
  - media
  - multimedia
  - embedding
  - interactive
category: "tutorial"
featured: false
---

# Images, Media, and HTML in Markdown

## Images

### Basic Image Syntax

![Alt text for accessibility](/next.svg)

![GitHub Logo](/github-logo.png "Optional title text")

### Images with Links

[![Next.js Logo](https://nextjs.org/static/favicon/favicon-32x32.png)](https://nextjs.org)

### Reference-style Images

![Alternative text][logo]

[logo]: /vercel.svg "Vercel Logo"

### Images with Size Control (HTML)

<img src="/next.svg" alt="Next.js Logo" width="100" height="50">

<img src="/vercel.svg" alt="Vercel Logo" style="width: 200px; height: auto;">

## HTML Elements in Markdown

### Basic HTML Tags

<p>This is a paragraph written in HTML instead of Markdown.</p>

<div>
    <p>HTML divs and paragraphs work fine.</p>
    <p>You can mix <strong>HTML</strong> and **Markdown** formatting.</p>
</div>

### Text Formatting with HTML

<mark>Highlighted text</mark> using the mark tag.

<u>Underlined text</u> using the u tag.

<sub>Subscript</sub> and <sup>Superscript</sup> text.

<small>Small text</small> and <big>big text</big>.

### HTML Lists

<ul>
    <li>HTML unordered list item 1</li>
    <li>HTML unordered list item 2
        <ul>
            <li>Nested HTML list item</li>
        </ul>
    </li>
</ul>

<ol>
    <li>HTML ordered list item 1</li>
    <li>HTML ordered list item 2</li>
</ol>

<dl>
    <dt>Definition Term</dt>
    <dd>Definition description using HTML.</dd>
    <dt>Another Term</dt>
    <dd>Another description with <em>emphasis</em>.</dd>
</dl>

### HTML Tables (More Control)

<table>
    <thead>
        <tr>
            <th style="text-align: left;">Name</th>
            <th style="text-align: center;">Age</th>
            <th style="text-align: right;">Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td style="text-align: center;">30</td>
            <td style="text-align: right;">$50,000</td>
        </tr>
        <tr style="background-color: #f0f0f0;">
            <td>Jane Smith</td>
            <td style="text-align: center;">25</td>
            <td style="text-align: right;">$45,000</td>
        </tr>
    </tbody>
</table>

### Spans and Divs with Classes

<div class="highlight">
    This div has a CSS class that could be styled.
</div>

<span style="color: red;">Red text using inline CSS.</span>

<span style="background-color: yellow; padding: 2px 4px;">Highlighted span</span>

### HTML Forms (if allowed)

<form>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br><br>
    
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br><br>
    
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
    
    <input type="submit" value="Submit">
</form>

### Audio and Video (HTML5)

<audio controls>
    <source src="audio-file.mp3" type="audio/mpeg">
    <source src="audio-file.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>

<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>

### Embedded Content

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1!2d-74.0!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

## Special Characters and Symbols

### Mathematical Symbols (if supported)

Mathematical expressions: α β γ δ ε ζ η θ

Greek letters: Α Β Γ Δ Ε Ζ Η Θ

Math symbols: ∑ ∏ ∫ ∞ ≤ ≥ ≠ ≈ ± × ÷

### Special Characters

Copyright © Trademark ™ Registered ®

Arrows: ← → ↑ ↓ ↔ ↕

Currency: $ € £ ¥ ¢

### HTML Entities

&amp; &lt; &gt; &quot; &#39; &copy; &reg; &trade;

&hellip; &mdash; &ndash; &nbsp;

## Emojis (if supported)

😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇

🚀 💻 📱 ⚡ 🔥 💡 🎯 🎨 🎵 🎮

🌟 ⭐ 🌙 ☀️ ⛅ 🌈 🌊 🌍 🌎 🌏

## Details and Summary (HTML5)

<details>
    <summary>Click to expand</summary>
    
    This content is hidden by default and can be expanded by clicking the summary.
    
    You can include any Markdown content here:
    
    - Lists
    - **Bold text**
    - `Code`
    - Even code blocks:
    
    ```javascript
    console.log("Hidden content revealed!");
    ```
</details>

<details open>
    <summary>This details element is open by default</summary>
    
    The `open` attribute makes this content visible initially.
</details>

## Progress and Meter Elements

<progress value="70" max="100">70%</progress>

<meter value="6" min="0" max="10">6 out of 10</meter>

<meter value="0.6">60%</meter>

## Keyboard Input

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

Use <kbd>Cmd</kbd> + <kbd>V</kbd> on Mac or <kbd>Ctrl</kbd> + <kbd>V</kbd> on Windows to paste.

The <kbd>Tab</kbd> key is used for indentation.

---

*This post demonstrates how to embed images, use HTML elements within Markdown, and include various media types and special characters.*