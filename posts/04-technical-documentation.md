---
title: "API Documentation: User Management System"
description: "Comprehensive API documentation for a User Management System, demonstrating professional technical writing in Markdown format."
date: "2024-06-16"
author: "GitHub Copilot"
tags: 
  - api
  - documentation
  - technical-writing
  - rest
  - user-management
  - reference
  - developers
category: "documentation"
featured: true
---

# API Documentation: User Management System

## Overview

This document provides comprehensive documentation for the User Management System API. The API follows RESTful principles and supports JSON request/response format.

**Base URL:** `https://api.example.com/v1`  
**Authentication:** Bearer Token  
**Rate Limiting:** 1000 requests per hour per API key  

---

## Table of Contents

1. [Authentication](#authentication)
2. [Error Handling](#error-handling)
3. [User Endpoints](#user-endpoints)
4. [Data Models](#data-models)
5. [Examples](#examples)
6. [SDKs and Libraries](#sdks-and-libraries)

---

## Authentication

All API requests require authentication using a Bearer token in the Authorization header.

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Content-Type: application/json" \
     https://api.example.com/v1/users
```

### Obtaining an API Token

```bash
curl -X POST https://api.example.com/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

---

## Error Handling

The API uses standard HTTP status codes and returns detailed error information.

### HTTP Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| `200` | OK | Request successful |
| `201` | Created | Resource created successfully |
| `400` | Bad Request | Invalid request parameters |
| `401` | Unauthorized | Authentication required |
| `403` | Forbidden | Insufficient permissions |
| `404` | Not Found | Resource not found |
| `422` | Unprocessable Entity | Validation errors |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Server error |

### Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid parameters",
    "details": [
      {
        "field": "email",
        "message": "Email format is invalid"
      },
      {
        "field": "age",
        "message": "Age must be between 18 and 120"
      }
    ]
  },
  "timestamp": "2024-06-10T14:30:00Z",
  "request_id": "req_1234567890abcdef"
}
```

---

## User Endpoints

### List Users

Retrieve a paginated list of users.

```http
GET /users
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | integer | 1 | Page number |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `created_at` | Sort field |
| `order` | string | `desc` | Sort order (`asc` or `desc`) |
| `search` | string | - | Search term for name/email |
| `status` | string | - | Filter by status (`active`, `inactive`) |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     "https://api.example.com/v1/users?page=1&limit=10&search=john&status=active"
```

**Example Response:**
```json
{
  "data": [
    {
      "id": 123,
      "name": "John Doe",
      "email": "john@example.com",
      "status": "active",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-06-01T14:20:00Z",
      "profile": {
        "avatar_url": "https://api.example.com/avatars/123.jpg",
        "bio": "Software developer passionate about clean code"
      }
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 50,
    "items_per_page": 10,
    "has_next": true,
    "has_previous": false
  }
}
```

### Get User by ID

Retrieve a specific user by their ID.

```http
GET /users/{id}
```

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | User ID |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.example.com/v1/users/123
```

### Create User

Create a new user account.

```http
POST /users
```

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "secure_password_123",
  "profile": {
    "bio": "Marketing professional",
    "phone": "+1-555-0123"
  },
  "preferences": {
    "notifications": true,
    "newsletter": false
  }
}
```

**Example Request:**
```bash
curl -X POST https://api.example.com/v1/users \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "password": "secure_password_123"
  }'
```

### Update User

Update an existing user's information.

```http
PUT /users/{id}
PATCH /users/{id}
```

> **Note:** Use `PUT` for full updates and `PATCH` for partial updates.

**Example PATCH Request:**
```bash
curl -X PATCH https://api.example.com/v1/users/123 \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "profile": {
      "bio": "Senior Software Developer"
    }
  }'
```

### Delete User

Soft delete a user account.

```http
DELETE /users/{id}
```

**Example Request:**
```bash
curl -X DELETE https://api.example.com/v1/users/123 \
     -H "Authorization: Bearer YOUR_TOKEN"
```

---

## Data Models

### User Model

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  created_at: string; // ISO 8601 timestamp
  updated_at: string; // ISO 8601 timestamp
  profile?: UserProfile;
  preferences?: UserPreferences;
}

interface UserProfile {
  avatar_url?: string;
  bio?: string;
  phone?: string;
  website?: string;
  location?: string;
}

interface UserPreferences {
  notifications: boolean;
  newsletter: boolean;
  theme: 'light' | 'dark' | 'auto';
  language: string; // ISO 639-1 language code
}
```

### Validation Rules

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `name` | string | Yes | 2-100 characters |
| `email` | string | Yes | Valid email format, unique |
| `password` | string | Yes (create only) | Min 8 characters, 1 uppercase, 1 lowercase, 1 number |
| `bio` | string | No | Max 500 characters |
| `phone` | string | No | Valid phone number format |

---

## Examples

### Complete User Management Workflow

#### 1. Authentication
```bash
# Login to get token
TOKEN=$(curl -s -X POST https://api.example.com/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}' \
  | jq -r '.token')
```

#### 2. Create a new user
```bash
curl -X POST https://api.example.com/v1/users \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "password": "SecurePass123!",
    "profile": {
      "bio": "Data scientist with 5 years experience",
      "phone": "+1-555-0199"
    }
  }'
```

#### 3. List all users with filtering
```bash
curl -H "Authorization: Bearer $TOKEN" \
     "https://api.example.com/v1/users?status=active&sort=name&order=asc"
```

#### 4. Update user profile
```bash
curl -X PATCH https://api.example.com/v1/users/456 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "profile": {
      "bio": "Senior Data Scientist specializing in ML",
      "website": "https://alicejohnson.dev"
    }
  }'
```

### Error Handling Example

```javascript
async function createUser(userData) {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const error = await response.json();
      
      if (response.status === 422) {
        // Handle validation errors
        error.error.details.forEach(detail => {
          console.error(`${detail.field}: ${detail.message}`);
        });
      } else if (response.status === 429) {
        // Handle rate limiting
        console.error('Rate limit exceeded. Please try again later.');
      }
      
      throw new Error(error.error.message);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to create user:', error.message);
    throw error;
  }
}
```

---

## SDKs and Libraries

### JavaScript/TypeScript SDK

```bash
npm install @example/user-api-sdk
```

```typescript
import { UserAPI } from '@example/user-api-sdk';

const userAPI = new UserAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.example.com/v1'
});

// Create user
const newUser = await userAPI.users.create({
  name: 'Bob Wilson',
  email: 'bob@example.com',
  password: 'SecurePass123!'
});

// List users with pagination
const users = await userAPI.users.list({
  page: 1,
  limit: 20,
  status: 'active'
});
```

### Python SDK

```bash
pip install example-user-api
```

```python
from example_user_api import UserAPI

client = UserAPI(api_key='your-api-key')

# Create user
user = client.users.create(
    name='Carol Davis',
    email='carol@example.com',
    password='SecurePass123!'
)

# Get user by ID
user = client.users.get(user_id=123)

# Update user
updated_user = client.users.update(
    user_id=123,
    profile={'bio': 'Updated bio'}
)
```

---

## Changelog

### v1.2.0 (2024-06-01)
- Added user preferences endpoint
- Improved error messages
- Added support for profile avatars

### v1.1.0 (2024-04-15)
- Added search functionality
- Implemented soft delete
- Enhanced validation

### v1.0.0 (2024-01-01)
- Initial API release
- Basic CRUD operations
- Authentication system

---

**Need Help?**

- 📧 Email: support@example.com
- 📖 Documentation: https://docs.example.com
- 🐛 Bug Reports: https://github.com/example/user-api/issues
- 💬 Community: https://discord.gg/example

---

*Last updated: June 10, 2024*