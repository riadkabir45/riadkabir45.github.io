---
title: "Advanced Markdown Formatting"
description: "Explore advanced Markdown features including tables, code blocks with syntax highlighting, complex blockquotes, and extended formatting options."
date: "2024-06-12"
author: "GitHub Copilot"
tags: 
  - markdown
  - advanced
  - tables
  - code-blocks
  - blockquotes
  - formatting
category: "tutorial"
featured: false
---

# Advanced Markdown Formatting

## Tables

### Basic Table

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | Yes | Always include headers |
| Alignment | Yes | Left, center, right |
| Nested content | Limited | Basic formatting only |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| This text | This text | This text |
| is left | is centered | is right |
| aligned | aligned | aligned |

### Table with Formatting

| Name | **Role** | *Status* | `Code` |
|------|----------|----------|--------|
| John Doe | **Admin** | *Active* | `USER_001` |
| Jane Smith | **User** | *Inactive* | `USER_002` |
| Bob Johnson | **Moderator** | *Active* | `USER_003` |

## Code Blocks

### Inline Code
Use `console.log()` for debugging JavaScript.
File paths like `/home/user/file.txt` are often shown in `backticks`.

### Fenced Code Blocks

```
Plain text code block
No syntax highlighting
```

```javascript
// JavaScript with syntax highlighting
function greetUser(name) {
    if (!name) {
        console.log("Hello, World!");
        return;
    }
    console.log(`Hello, ${name}!`);
}

greetUser("Alice");
```

```python
# Python code example
def fibonacci(n):
    """Generate Fibonacci sequence up to n."""
    a, b = 0, 1
    sequence = []
    
    while a < n:
        sequence.append(a)
        a, b = b, a + b
    
    return sequence

# Usage
fib_numbers = fibonacci(100)
print(f"Fibonacci numbers less than 100: {fib_numbers}")
```

```typescript
// TypeScript interface and class
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    findUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}
```

```bash
# Bash script example
#!/bin/bash

# Function to backup files
backup_files() {
    local source_dir="$1"
    local backup_dir="$2"
    local timestamp=$(date +"%Y%m%d_%H%M%S")
    
    if [ ! -d "$source_dir" ]; then
        echo "Error: Source directory does not exist"
        return 1
    fi
    
    mkdir -p "$backup_dir"
    tar -czf "$backup_dir/backup_$timestamp.tar.gz" -C "$source_dir" .
    echo "Backup completed: backup_$timestamp.tar.gz"
}

# Usage
backup_files "/home/user/documents" "/home/user/backups"
```

```sql
-- SQL example
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Complex query with joins
SELECT 
    u.username,
    u.email,
    COUNT(p.id) as post_count,
    MAX(p.created_at) as last_post_date
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.is_active = TRUE
GROUP BY u.id, u.username, u.email
HAVING COUNT(p.id) > 5
ORDER BY post_count DESC, last_post_date DESC
LIMIT 10;
```

```json
{
  "name": "advanced-markdown-demo",
  "version": "1.0.0",
  "description": "Demonstrating JSON in Markdown",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "webpack": "^5.70.0"
  },
  "author": "GitHub Copilot",
  "license": "MIT"
}
```

### Indented Code Blocks (4 spaces)

    function oldSchoolCodeBlock() {
        // This is created with 4 spaces indentation
        return "This is the old way to create code blocks";
    }

## Blockquotes

### Simple Blockquote
> This is a simple blockquote.
> It can span multiple lines.

### Nested Blockquotes
> This is a top-level quote.
> 
> > This is a nested quote within the first quote.
> > 
> > > And this is a quote nested even deeper.
> 
> Back to the top-level quote.

### Blockquote with Other Elements

> **Important Note:**
> 
> This blockquote contains other Markdown elements:
> 
> - Bullet points work inside blockquotes
> - You can use *emphasis* and **strong** text
> - Even `inline code` works
> 
> ```javascript
> // Code blocks also work inside blockquotes
> console.log("Hello from inside a blockquote!");
> ```
> 
> > Nested blockquotes with code: `git commit -m "Fix bug"`

### Quote Attribution

> "The best way to predict the future is to invent it."
> 
> — Alan Kay

> "Talk is cheap. Show me the code."
> 
> — Linus Torvalds

## Definition Lists (if supported)

Apple
:   Pomaceous fruit of plants of the genus Malus in the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.
:   A color between red and yellow.

Programming Language
:   A formal language that specifies a set of instructions that can be used to produce various kinds of output.
:   Examples include Python, JavaScript, and Rust.

## Abbreviations (if supported)

*[HTML]: Hypertext Markup Language
*[CSS]: Cascading Style Sheets
*[JS]: JavaScript

HTML and CSS are fundamental web technologies, while JS adds interactivity.

---

*This post demonstrates advanced Markdown formatting including tables, various code blocks, and complex blockquotes.*