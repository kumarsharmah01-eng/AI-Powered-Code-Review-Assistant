# CodeLens — AI-Powered Code Review Assistant

CodeLens is a full-stack AI-powered code review assistant that helps developers analyze source code, identify potential issues, understand their codebase, and generate useful development documentation.

The application provides a centralized workspace for uploading software projects, exploring source files, running AI-powered code reviews, viewing review history, chatting with code, generating documentation, and analyzing application architecture.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Problem Statement](#problem-statement)
- [Objectives](#objectives)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [AI Provider Configuration](#ai-provider-configuration)
- [AI Review Workflow](#ai-review-workflow)
- [Security](#security)
- [Database](#database)
- [Docker](#docker)
- [Assessment Requirements](#assessment-requirements)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Project Overview

Modern software projects can contain thousands of lines of code distributed across many files and modules. Manually reviewing such projects for security problems, performance issues, maintainability problems, and architectural concerns can be time-consuming.

CodeLens addresses this problem by combining a full-stack project management system with configurable AI models.

A developer can:

1. Create a project.
2. Upload the project source code.
3. Explore files and folders.
4. Select a review type.
5. Send relevant code to an AI provider.
6. Receive structured review findings.
7. View severity and recommendations.
8. Ask questions about the codebase.
9. Generate documentation.
10. Analyze the project architecture.

---

## Problem Statement

Developers frequently need to review unfamiliar or large codebases.

Common problems include:

- Finding security vulnerabilities
- Detecting inefficient code
- Understanding unfamiliar modules
- Identifying maintainability problems
- Understanding project architecture
- Creating documentation
- Reviewing code consistently

CodeLens provides an AI-assisted workflow for these tasks while keeping the developer in control of the final decisions.

---

## Objectives

The main objectives of CodeLens are:

- Build a production-oriented full-stack application.
- Provide secure authentication.
- Allow developers to manage projects.
- Allow source-code project uploads.
- Provide a code explorer.
- Integrate configurable AI providers.
- Generate structured code reviews.
- Store review history.
- Provide AI chat using project context.
- Generate documentation.
- Analyze application architecture.
- Maintain a modular and scalable backend architecture.

---

# Features

## 1. Authentication

CodeLens provides:

- User registration
- User login
- JWT authentication
- Password hashing
- Protected backend routes
- Logout functionality
- Request validation

Passwords are hashed using bcrypt and are never stored as plain text.

---

## 2. Dashboard

The dashboard provides a central workspace for accessing:

- Projects
- Reviews
- AI Chat
- AI Providers
- Documentation
- Architecture Analysis

---

## 3. Project Management

Users can:

- Create projects
- View projects
- Open project details
- Delete projects
- View project metadata
- Access project-specific files and reviews

---

## 4. Source Code Upload

CodeLens supports project source-code upload using ZIP archives.

The backend is responsible for:

- Receiving uploads
- Validating files
- Extracting ZIP archives
- Processing source files
- Organizing files by project
- Preparing source code for AI analysis

Generated and unnecessary directories can be excluded from processing, such as:

```text
node_modules/
.git/
.next/
dist/
build/
coverage/
```

---

## 5. Code Explorer

The project details area provides a code exploration workflow.

Developers can:

- View project folders
- Browse files
- Select files
- Preview source code
- Use source code as review context

---

## 6. AI Code Review

CodeLens provides structured AI-powered code reviews.

Review categories include:

### Security

Focuses on potential:

- Authentication problems
- Authorization issues
- Input validation problems
- Injection risks
- Secret exposure
- Unsafe file handling
- Security configuration issues

### Performance

Focuses on:

- Inefficient algorithms
- Unnecessary loops
- Repeated database operations
- Expensive processing
- Memory concerns
- Unnecessary network requests

### Code Quality

Focuses on:

- Maintainability
- Code duplication
- Naming
- Complexity
- Error handling
- Separation of concerns
- Reusability

---

## 7. Review Severity

Individual findings can have one of four severity levels:

```text
Critical
High
Medium
Low
```

Each finding can contain:

- Title
- Severity
- Description
- Recommendation
- Relevant source context

---

## 8. Review History

CodeLens provides a review history workflow.

Users can:

- View previous reviews
- Open review details
- Review generated findings
- Maintain a history of AI analysis

---

## 9. AI Chat With Code

Developers can ask questions about uploaded source code.

Examples:

```text
How does authentication work?

Where is the database connection created?

Explain this controller.

How does the upload workflow work?

Which module handles AI reviews?

How can this function be optimized?
```

The backend can provide relevant project code as context to the AI model.

---

## 10. AI Provider Configuration

CodeLens uses an OpenAI-compatible provider architecture.

Provider configuration includes:

```text
Provider Name
Base URL
API Key
Model Name
```

This allows the application to support different AI providers without changing the core review logic.

Supported provider targets include:

- OpenAI
- LM Studio
- Other OpenAI-compatible endpoints

The architecture can be extended to support:

- Ollama
- OpenRouter
- Additional compatible providers

---

## 11. Documentation Generator

CodeLens can use project context to assist with documentation generation.

Possible documentation includes:

- Project overview
- Installation instructions
- Module descriptions
- API documentation
- Configuration documentation
- Development guidelines

---

## 12. Architecture Analysis

The architecture analysis feature can analyze:

- Project structure
- Modules
- Dependencies
- Application layers
- Component relationships
- Potential coupling
- Maintainability concerns
- Improvement opportunities

---

# Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide Icons

## Backend

- NestJS
- TypeScript
- JWT
- Passport
- bcrypt
- class-validator
- class-transformer
- Multer
- Adm-ZIP
- Swagger/OpenAPI

## Database

Target database:

- PostgreSQL

ORM:

- Prisma

## AI

OpenAI-compatible AI architecture supporting:

- OpenAI
- LM Studio
- Custom OpenAI-compatible endpoints

## Infrastructure

- Docker
- Docker Compose

---

# System Architecture

```text
                    +----------------------+
                    |       Developer      |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |    Next.js Frontend  |
                    | TypeScript + Tailwind|
                    +----------+-----------+
                               |
                         REST / JSON
                               |
                               v
                    +----------------------+
                    |     NestJS Backend   |
                    +----------+-----------+
                               |
          +--------------------+--------------------+
          |                    |                    |
          v                    v                    v
   Authentication       Project/File Layer     AI Layer
          |                    |                    |
          |                    |                    v
          |                    |             AI Provider
          |                    |                    |
          |                    |          +---------+---------+
          |                    |          |                   |
          v                    v          v                   v
       Users             Source Files   OpenAI            LM Studio
                               |
                               v
                         PostgreSQL
                           + Prisma
```

---

# Project Structure

```text
codelens/
│
├── frontend/
│   ├── app/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── projects/
│   │   │   └── [projectId]/
│   │   ├── reviews/
│   │   ├── chat/
│   │   ├── providers/
│   │   ├── documentation/
│   │   └── architecture/
│   │
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── projects/
│   │   ├── files/
│   │   ├── reviews/
│   │   ├── ai/
│   │   ├── chat/
│   │   ├── providers/
│   │   ├── prisma/
│   │   ├── common/
│   │   ├── appModule.ts
│   │   └── main.ts
│   │
│   ├── prisma/
│   ├── uploads/
│   ├── .env
│   └── package.json
│
├── docker-compose.yml
├── README.md
├── ARCHITECTURE.md
├── AI_USAGE.md
└── .gitignore
```

---

# Getting Started

## Prerequisites

Install the following:

- Node.js 24.x
- npm 11.x
- Git
- Docker Desktop
- PostgreSQL through Docker

Check Node.js:

```bash
node -v
```

Check npm:

```bash
npm -v
```

---

# Installation

## 1. Clone Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Then:

```bash
cd codelens
```

---

## 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

# Environment Variables

Create:

```text
backend/.env
```

Example:

```env
PORT=3001

FRONTEND_URL=http://localhost:3000

JWT_SECRET=replace-with-a-secure-random-secret

UPLOAD_DIR=./uploads

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/codelens
```

Do not commit real secrets or API keys to GitHub.

---

# Running the Application

## Start Frontend

From:

```text
frontend/
```

run:

```bash
npm run dev
```

Frontend:

```text
http://localhost:3000
```

---

## Start Backend

From:

```text
backend/
```

run:

```bash
npm run start:dev
```

Backend:

```text
http://localhost:3001/api
```

Swagger documentation:

```text
http://localhost:3001/api/docs
```

---

# API Endpoints

## Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

---

## Projects

```http
GET    /api/projects
POST   /api/projects
GET    /api/projects/:id
DELETE /api/projects/:id
```

---

## Files

```http
POST   /api/projects/:id/files/upload
GET    /api/projects/:id/files
GET    /api/files/:id
DELETE /api/files/:id
```

---

## Reviews

```http
POST   /api/reviews
GET    /api/reviews
GET    /api/reviews/:id
DELETE /api/reviews/:id
```

---

## AI

```http
POST /api/ai/review
POST /api/ai/chat
```

---

## AI Providers

```http
GET    /api/providers
POST   /api/providers
PUT    /api/providers/:id
DELETE /api/providers/:id
```

---

# AI Review Workflow

```text
User
 |
 v
Select Project
 |
 v
Select Files
 |
 v
Select Review Template
 |
 v
Backend Authentication
 |
 v
Validate Request
 |
 v
Read Source Code
 |
 v
Build AI Context
 |
 v
Select Configured Provider
 |
 v
Send Prompt
 |
 v
Receive AI Response
 |
 v
Validate / Normalize Response
 |
 v
Store Review
 |
 v
Display Results
```

---

# Database

The production persistence layer uses PostgreSQL with Prisma.

Core entities include:

```text
User
Project
File
Review
AIProvider
ChatSession
Message
```

Relationship overview:

```text
User
 |
 +---- Project
          |
          +---- File
          |
          +---- Review
          |
          +---- ChatSession
                    |
                    +---- Message

User
 |
 +---- AIProvider
```

---

# Docker

The application is designed to use Docker Compose for local infrastructure.

Start containers:

```bash
docker compose up -d
```

Check containers:

```bash
docker ps
```

Stop containers:

```bash
docker compose down
```

Once PostgreSQL is available, initialize Prisma:

```bash
npx prisma generate
```

Then create the database migration:

```bash
npx prisma migrate dev --name init
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

# Security

CodeLens follows several security practices:

- Password hashing with bcrypt
- JWT authentication
- Protected routes
- DTO validation
- Environment-based secrets
- Configurable AI credentials
- Project ownership checks
- File validation
- Upload restrictions
- Path traversal protection
- No hard-coded production credentials

AI-generated content is treated as untrusted output and should not be executed automatically.

---

# AI Provider Configuration

The application separates AI provider configuration from the review business logic.

Example:

```text
Provider:
OpenAI

Base URL:
Provider API endpoint

API Key:
User-provided secret

Model:
Configured model name
```

The same interface can be used with an OpenAI-compatible local server such as LM Studio.

This design prevents the application from being permanently tied to one AI provider.

---

# Production Considerations

For production deployment, the following should be added or strengthened:

- HTTPS
- Secure cookie configuration
- Rate limiting
- Redis caching/queues
- Background AI processing
- Object storage
- File malware scanning
- Strong secret management
- Audit logging
- Repository-level access controls
- Request logging
- Monitoring

---

# Future Improvements

Potential future features include:

- GitHub repository import
- Pull request reviews
- AST-based code analysis
- Dependency vulnerability scanning
- Automated test generation
- Code patch generation
- Streaming AI responses
- RAG-based repository search
- Semantic code search
- Dependency graphs
- Background processing
- CI/CD integration
- Team collaboration
- Role-based access control

---

# Assessment Requirements

CodeLens is designed to demonstrate the following engineering areas:

- Next.js
- TypeScript
- Tailwind CSS
- NestJS
- PostgreSQL
- Authentication
- JWT
- Password hashing
- File uploads
- ZIP processing
- REST APIs
- AI integration
- Configurable AI providers
- Code review
- Review history
- AI chat
- Documentation generation
- Architecture analysis
- Docker-ready infrastructure
- Modular backend architecture
- Production-oriented design

---

# Documentation

Additional project documentation:

- `ARCHITECTURE.md` — System and technical architecture
- `AI_USAGE.md` — AI integration, prompting, safety, and usage documentation

---

# License

This project was developed for educational, portfolio, and internship assessment purposes.
