# Architecture Documentation

## AI-Powered Code Review Assistant

### 1. Overview

The AI-Powered Code Review Assistant is a full-stack web application that allows developers to upload source code and receive structured AI-generated code reviews.

The system is designed with a modular architecture so that the frontend, backend, database, file processing, and AI provider integrations remain separated and maintainable.

The application supports configurable AI providers through OpenAI-compatible APIs. This allows the system to work with cloud-based providers as well as locally hosted AI models.

---

## 2. High-Level Architecture

```text
                         ┌─────────────────────────┐
                         │        Developer        │
                         │      Web Browser        │
                         └────────────┬────────────┘
                                      │
                                      │ HTTP / REST API
                                      ▼
                    ┌─────────────────────────────────┐
                    │           Next.js               │
                    │           Frontend              │
                    │                                 │
                    │  • Authentication UI            │
                    │  • Project Management            │
                    │  • File Upload                  │
                    │  • Review Interface              │
                    │  • Settings                      │
                    └───────────────┬─────────────────┘
                                    │
                                    │ REST API
                                    ▼
                    ┌─────────────────────────────────┐
                    │            NestJS                │
                    │            Backend               │
                    │                                 │
                    │  • Authentication               │
                    │  • Projects                     │
                    │  • Files                        │
                    │  • Reviews                      │
                    │  • AI Integration                │
                    │  • Configuration                 │
                    └───────┬───────────┬─────────────┘
                            │           │
                 ┌──────────┘           └──────────────┐
                 │                                     │
                 ▼                                     ▼
       ┌────────────────────┐              ┌────────────────────┐
       │    PostgreSQL      │              │    AI Provider     │
       │                    │              │                    │
       │ • Users            │              │ OpenAI-compatible  │
       │ • Projects         │              │ API                │
       │ • Files            │              │                    │
       │ • Reviews          │              │ Cloud / Local      │
       └────────────────────┘              └────────────────────┘
```

---

## 3. Technology Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- React
- REST API integration
- Client-side state management

### Backend

- NestJS
- TypeScript
- REST APIs
- Authentication and authorization
- File processing
- AI service integration

### Database

- PostgreSQL
- Relational data model
- Persistent storage for users, projects, files, and reviews

### AI Integration

The application uses an OpenAI-compatible API architecture.

Supported provider types can include:

- OpenAI
- LM Studio
- Ollama
- OpenRouter
- Other OpenAI-compatible endpoints

The AI provider is configurable instead of being hardcoded into the application.

---

# 4. Project Structure

```text
ai-code-review-assistant/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── types/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── projects/
│   │   ├── files/
│   │   ├── reviews/
│   │   ├── ai/
│   │   ├── users/
│   │   └── main.ts
│   │
│   ├── package.json
│   └── ...
│
├── architecture.md
├── ai_usage.md
├── README.md
└── ...
```

---

# 5. Frontend Architecture

The frontend is implemented using Next.js and TypeScript.

The frontend is responsible for:

1. Rendering the user interface.
2. Handling user interactions.
3. Authentication screens.
4. Project creation and management.
5. File upload.
6. Displaying code review results.
7. AI provider configuration.
8. Communicating with the backend through REST APIs.

### Frontend Flow

```text
User
 │
 ▼
Next.js UI
 │
 ├── Login / Register
 │
 ├── Projects
 │
 ├── Project Details
 │
 ├── Upload Source Code
 │
 ├── Start Review
 │
 └── Review Results
        │
        ▼
     Backend API
```

The frontend does not directly communicate with the database or AI provider.

All sensitive operations are handled by the backend.

---

# 6. Backend Architecture

The backend is built using NestJS.

NestJS provides a modular architecture where application functionality is divided into independent modules.

Example backend modules:

```text
Backend
│
├── AuthModule
│
├── UsersModule
│
├── ProjectsModule
│
├── FilesModule
│
├── ReviewsModule
│
└── AiModule
```

### Responsibilities

#### Auth Module

Handles:

- User registration
- Login
- Authentication
- Authorization
- Token validation

#### Projects Module

Handles:

- Project creation
- Project retrieval
- Project updates
- Project deletion

#### Files Module

Handles:

- Source-code uploads
- File validation
- File processing
- Project-file association

#### Reviews Module

Handles:

- Creating review requests
- Storing review results
- Retrieving previous reviews

#### AI Module

Handles:

- AI provider configuration
- Prompt construction
- AI API requests
- Response parsing
- Structured review generation

---

# 7. Request Flow

A typical code-review request follows this flow:

```text
1. User logs into the application
             │
             ▼
2. User creates/selects a project
             │
             ▼
3. User uploads source files
             │
             ▼
4. Frontend sends files to NestJS API
             │
             ▼
5. Backend validates and processes files
             │
             ▼
6. Backend prepares code-review prompt
             │
             ▼
7. AI service receives the request
             │
             ▼
8. AI generates structured review
             │
             ▼
9. Backend validates the response
             │
             ▼
10. Review is stored in PostgreSQL
             │
             ▼
11. Frontend retrieves/displays review
```

---

# 8. Database Architecture

PostgreSQL is used as the primary persistent database.

The main entities are:

```text
User
 │
 └── Projects
       │
       ├── Files
       │
       └── Reviews
```

### User

Stores information required for application authentication and user ownership.

Example fields:

```text
User
├── id
├── email
├── passwordHash
├── createdAt
└── updatedAt
```

### Project

Represents a developer's code-review project.

```text
Project
├── id
├── name
├── description
├── userId
├── createdAt
└── updatedAt
```

### File

Stores metadata about uploaded source files.

```text
File
├── id
├── projectId
├── filename
├── path
├── size
├── mimeType
└── createdAt
```

### Review

Stores AI-generated code-review results.

```text
Review
├── id
├── projectId
├── summary
├── issues
├── suggestions
├── severity
├── model
└── createdAt
```

---

# 9. AI Provider Architecture

The AI integration is intentionally provider-agnostic.

Instead of hardcoding one AI provider, the backend uses configurable parameters:

```text
Base URL
API Key
Model Name
```

Example:

```text
AI Configuration
│
├── Base URL
├── API Key
└── Model Name
```

This allows the application to switch between different AI services without changing the core review logic.

Example configurations:

```text
OpenAI
Base URL → OpenAI API
Model    → configured model

LM Studio
Base URL → local LM Studio server
Model    → locally loaded model

Ollama
Base URL → local Ollama endpoint
Model    → configured local model
```

---

# 10. Security Architecture

Security is considered at multiple layers.

### Authentication

Users must authenticate before accessing protected application resources.

### Authorization

Project and review data should only be accessible to the authenticated owner.

### API Keys

AI provider API keys are handled by the backend and should not be exposed to the browser.

### Input Validation

The backend validates:

- Request bodies
- Uploaded files
- File types
- File sizes
- Project ownership
- AI configuration

### Environment Variables

Sensitive configuration should be stored using environment variables.

Example:

```text
DATABASE_URL
JWT_SECRET
AI_BASE_URL
AI_API_KEY
AI_MODEL
```

Secrets should never be committed to Git.

---

# 11. File Processing Architecture

The application accepts source-code/project files through the backend.

The file-processing pipeline is:

```text
Upload
  │
  ▼
Validate File
  │
  ├── Valid ───────► Process
  │
  └── Invalid ─────► Reject
                         │
                         ▼
                    Error Response
```

After validation, source code is extracted and prepared for the AI review process.

The backend controls what file types and sizes are accepted to reduce unnecessary processing and security risks.

---

# 12. Code Review Pipeline

The AI review pipeline is designed to produce structured results rather than an unformatted block of text.

```text
Source Code
    │
    ▼
File Processing
    │
    ▼
Code Context
    │
    ▼
Review Prompt
    │
    ▼
AI Model
    │
    ▼
Structured Response
    │
    ├── Summary
    ├── Issues
    ├── Severity
    ├── Suggestions
    └── Improvements
    │
    ▼
Database
    │
    ▼
Frontend
```

---

# 13. API Architecture

The frontend communicates with the backend through REST APIs.

Typical API groups include:

```text
/api/auth
/api/projects
/api/files
/api/reviews
/api/ai
```

Example request:

```text
POST /api/projects
```

Example review operation:

```text
POST /api/reviews
```

The exact endpoints may evolve as the implementation develops, while the separation between frontend and backend remains consistent.

---

# 14. Error Handling

Errors are handled at multiple levels.

### Frontend

The frontend displays user-friendly error messages for:

- Invalid login
- Failed upload
- Failed API request
- Review generation failure

### Backend

The backend validates requests and returns appropriate HTTP responses.

Example:

```text
400 → Invalid request
401 → Authentication required
403 → Unauthorized access
404 → Resource not found
500 → Internal server error
```

AI provider failures are also handled so that a provider error does not crash the complete application.

---

# 15. Scalability Considerations

The architecture allows individual components to scale independently.

For example:

```text
Frontend
   │
   ▼
Load Balancer
   │
   ├── Backend Instance 1
   ├── Backend Instance 2
   └── Backend Instance 3
           │
           ▼
       PostgreSQL
```

AI processing can also be moved to asynchronous/background jobs in a future version for large repositories or long-running reviews.

---

# 16. Future Improvements

Possible future improvements include:

- GitHub repository integration
- GitLab repository integration
- Pull-request review
- Streaming AI responses
- Background review jobs
- Review history comparison
- Code-quality metrics
- Authentication using OAuth
- Redis-based caching
- Queue-based processing
- Docker-based deployment
- Automated CI/CD
- Advanced repository parsing
- Support for additional AI providers

---

# 17. Design Principles

The application follows these architectural principles:

1. **Separation of concerns**
2. **Modular backend architecture**
3. **Reusable frontend components**
4. **Provider-independent AI integration**
5. **Secure handling of secrets**
6. **Database persistence**
7. **Input validation**
8. **Clear API boundaries**
9. **Maintainability**
10. **Future scalability**

The primary goal is to keep the system understandable, testable, and extensible while maintaining a clear separation between presentation, business logic, persistence, and AI integration.
