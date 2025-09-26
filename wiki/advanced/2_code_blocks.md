---
title: "Code Blocks and Syntax Highlighting"
description: "Master code presentation with inline code, code blocks, and syntax highlighting"
date: "2024-12-01"
author: "Wiki Team"
tags: 
  - markdown
  - code
  - syntax-highlighting
  - programming
category: "advanced"
featured: false
---

# Code Blocks and Syntax Highlighting

Properly formatted code is essential for technical documentation. Learn to present code beautifully with syntax highlighting and advanced formatting.

## Inline Code

Use single backticks for `inline code`:

```markdown
Use the `console.log()` function to output data.
The variable `userName` stores the current user.
Install with `npm install package-name`.
```

**Result:**
Use the `console.log()` function to output data.
The variable `userName` stores the current user.
Install with `npm install package-name`.

## Basic Code Blocks

Use triple backticks for multi-line code blocks:

````markdown
```
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
```
````

**Result:**
```
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
```

## Syntax Highlighting

Add language identifier after opening backticks:

````markdown
```javascript
function greetUser(name) {
    console.log("Hello, " + name + "!");
    return `Welcome, ${name}!`;
}
````

**Result:**
```javascript
function greetUser(name) {
    console.log("Hello, " + name + "!");
    return `Welcome, ${name}!`;
}
```

## Popular Languages

### JavaScript/TypeScript

````markdown
```typescript
interface User {
    id: number;
    name: string;
    email?: string;
}

const createUser = (userData: User): Promise<User> => {
    return fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    }).then(response => response.json());
};
```
````

**Result:**
```typescript
interface User {
    id: number;
    name: string;
    email?: string;
}

const createUser = (userData: User): Promise<User> => {
    return fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    }).then(response => response.json());
};
```

### Python

````markdown
```python
class DatabaseManager:
    def __init__(self, connection_string):
        self.connection = connection_string
        self.connected = False
    
    def connect(self):
        """Establish database connection"""
        try:
            # Connection logic here
            self.connected = True
            print(f"Connected to {self.connection}")
        except Exception as e:
            print(f"Connection failed: {e}")
            return False
        return True
    
    def query(self, sql, params=None):
        if not self.connected:
            raise ConnectionError("Not connected to database")
        # Query execution logic
        return {"status": "success", "data": []}
```
````

**Result:**
```python
class DatabaseManager:
    def __init__(self, connection_string):
        self.connection = connection_string
        self.connected = False
    
    def connect(self):
        """Establish database connection"""
        try:
            # Connection logic here
            self.connected = True
            print(f"Connected to {self.connection}")
        except Exception as e:
            print(f"Connection failed: {e}")
            return False
        return True
    
    def query(self, sql, params=None):
        if not self.connected:
            raise ConnectionError("Not connected to database")
        # Query execution logic
        return {"status": "success", "data": []}
```

### Java

````markdown
```java
public class UserService {
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public Optional<User> findUserById(Long id) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid user ID");
        }
        
        return userRepository.findById(id)
            .filter(user -> user.isActive())
            .map(this::enrichUserData);
    }
    
    private User enrichUserData(User user) {
        // Add additional user information
        user.setLastLoginTime(getLastLoginTime(user.getId()));
        return user;
    }
}
```
````

**Result:**
```java
public class UserService {
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public Optional<User> findUserById(Long id) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid user ID");
        }
        
        return userRepository.findById(id)
            .filter(user -> user.isActive())
            .map(this::enrichUserData);
    }
    
    private User enrichUserData(User user) {
        // Add additional user information
        user.setLastLoginTime(getLastLoginTime(user.getId()));
        return user;
    }
}
```

## Configuration Files

### JSON

````markdown
```json
{
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js",
        "test": "jest --coverage"
    },
    "dependencies": {
        "express": "^4.18.0",
        "mongoose": "^7.0.0"
    },
    "engines": {
        "node": ">=18.0.0"
    }
}
```
````

**Result:**
```json
{
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js",
        "test": "jest --coverage"
    },
    "dependencies": {
        "express": "^4.18.0",
        "mongoose": "^7.0.0"
    },
    "engines": {
        "node": ">=18.0.0"
    }
}
```

### YAML

````markdown
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web-app
    version: v1.0.0
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: nginx:1.21
        ports:
        - containerPort: 80
        env:
        - name: ENV
          value: "production"
```
````

**Result:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web-app
    version: v1.0.0
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: nginx:1.21
        ports:
        - containerPort: 80
        env:
        - name: ENV
          value: "production"
```

## Shell Commands

### Bash

````markdown
```bash
#!/bin/bash

# Setup script for development environment
echo "Setting up development environment..."

# Install dependencies
sudo apt update
sudo apt install -y nodejs npm git curl

# Clone repository
git clone https://github.com/username/project.git
cd project

# Install node modules
npm install

# Create environment file
cat << EOF > .env
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
EOF

echo "Setup complete! Run 'npm start' to begin."
```
````

**Result:**
```bash
#!/bin/bash

# Setup script for development environment
echo "Setting up development environment..."

# Install dependencies
sudo apt update
sudo apt install -y nodejs npm git curl

# Clone repository
git clone https://github.com/username/project.git
cd project

# Install node modules
npm install

# Create environment file
cat << EOF > .env
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
EOF

echo "Setup complete! Run 'npm start' to begin."
```

## SQL Queries

````markdown
```sql
-- Complex query with joins and aggregations
SELECT 
    u.id,
    u.username,
    u.email,
    COUNT(p.id) as post_count,
    AVG(p.rating) as avg_rating,
    MAX(p.created_at) as last_post_date
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.active = true
    AND u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
GROUP BY u.id, u.username, u.email
HAVING post_count > 0
ORDER BY avg_rating DESC, post_count DESC
LIMIT 10;

-- Create index for performance
CREATE INDEX idx_users_active_created 
ON users(active, created_at) 
WHERE active = true;
```
````

**Result:**
```sql
-- Complex query with joins and aggregations
SELECT 
    u.id,
    u.username,
    u.email,
    COUNT(p.id) as post_count,
    AVG(p.rating) as avg_rating,
    MAX(p.created_at) as last_post_date
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.active = true
    AND u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
GROUP BY u.id, u.username, u.email
HAVING post_count > 0
ORDER BY avg_rating DESC, post_count DESC
LIMIT 10;

-- Create index for performance
CREATE INDEX idx_users_active_created 
ON users(active, created_at) 
WHERE active = true;
```

## Advanced Techniques

### Line Numbers and Highlighting

Some Markdown processors support line highlighting:

````markdown
```javascript {3,7-9}
function processData(data) {
    if (!data) return null;
    
    const processed = data
        .filter(item => item.active)
        .map(item => ({
            ...item,
            timestamp: Date.now(),
            processed: true
        }));
    
    return processed;
}
```
````

### Filename Headers

````markdown
```javascript
// filename: utils/dataProcessor.js
function processData(data) {
    // Implementation here
}

export default processData;
```
````

**Result:**
```javascript
// filename: utils/dataProcessor.js
function processData(data) {
    // Implementation here
}

export default processData;
```

## Best Practices

### Code Documentation

1. **Add comments** for complex logic
2. **Use descriptive variable names**
3. **Include filename or context** when helpful
4. **Show complete, runnable examples**
5. **Format consistently** with proper indentation

### Language Selection

- Use specific languages (`javascript`, `python`, `sql`) not generic (`code`, `text`)
- Choose the most specific variant (`typescript` vs `javascript`)
- Use `bash` for shell commands, not `shell` or `cmd`

### Example Structure

````markdown
```typescript
// api/users.ts
interface CreateUserRequest {
    name: string;
    email: string;
}

export async function createUser(req: CreateUserRequest) {
    // Validate input
    if (!req.name || !req.email) {
        throw new Error('Name and email are required');
    }
    
    // Create user logic here
    const user = await database.users.create(req);
    return user;
}
```
````

## Practice Exercise

Create code blocks for:

1. A Python function that processes a list
2. A SQL query with a JOIN
3. A JSON configuration file
4. A bash script with comments
5. Include proper syntax highlighting for each

---

*Previous: [Advanced Tables](advanced/1_tables) | Next: [Mathematical Expressions](advanced/3_math)*