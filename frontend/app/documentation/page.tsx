"use client";

import { useState } from "react";

const generatedDocumentation = `# AI Code Review Assistant

## Overview

AI Code Review Assistant is a full-stack application that analyzes
uploaded source code and provides AI-powered code review feedback.

## Project Structure

The project contains a Next.js frontend and a NestJS backend.

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- App Router

### Backend

- NestJS
- PostgreSQL
- Prisma
- JWT Authentication

## Authentication

The application provides user registration and login functionality.

Authenticated users can access their projects, uploaded source code,
reviews, and AI-powered features.

## Code Review

Users can upload project source code and select a review template.

Supported review templates:

- Security
- Performance
- Code Quality

The AI analyzes the selected code and produces:

- Summary
- Issues
- Recommendations
- Severity

## AI Chat

Users can ask questions about their uploaded project.

The AI uses project files as context to provide code-specific answers.

## Conclusion

CodeLens provides a centralized platform for understanding,
reviewing and improving source code using configurable AI providers.
`;

export default function DocumentationPage() {
  const [project, setProject] = useState("AI Code Review Assistant");

  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setGenerated(false);

    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 1500);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedDocumentation], {
      type: "text/markdown",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "PROJECT_DOCUMENTATION.md";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-8 py-6">
        <h1 className="text-3xl font-bold">Documentation Generator</h1>

        <p className="mt-2 text-sm text-slate-400">
          Generate project documentation from your uploaded source code.
        </p>
      </header>

      <section className="grid gap-6 p-8 xl:grid-cols-[320px_1fr]">
        {/* Controls */}
        <aside className="h-fit rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold">Documentation Settings</h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Select a project and generate documentation based on its source
            code.
          </p>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Project
            </label>

            <select
              value={project}
              onChange={(event) => setProject(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
            >
              <option>AI Code Review Assistant</option>

              <option>Portfolio Backend</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={generating}
            className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {generating ? "Generating..." : "Generate Documentation"}
          </button>

          <div className="mt-6 rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Included
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>✓ Project overview</li>
              <li>✓ Project structure</li>
              <li>✓ Technologies</li>
              <li>✓ Authentication</li>
              <li>✓ Code review workflow</li>
              <li>✓ AI chat</li>
            </ul>
          </div>
        </aside>

        {/* Documentation */}
        <section className="min-w-0 rounded-xl border border-slate-800 bg-slate-900/50">
          <div className="flex flex-col gap-4 border-b border-slate-800 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold">Generated Documentation</h2>

              <p className="mt-1 text-xs text-slate-500">{project}</p>
            </div>

            {generated && (
              <button
                onClick={handleDownload}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Download Markdown
              </button>
            )}
          </div>

          <div className="p-6">
            {!generated && !generating && (
              <div className="flex min-h-[500px] items-center justify-center text-center">
                <div>
                  <div className="text-5xl">📚</div>

                  <h3 className="mt-4 text-lg font-semibold">
                    No documentation generated
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    Select a project and click Generate Documentation to create
                    project documentation.
                  </p>
                </div>
              </div>
            )}

            {generating && (
              <div className="flex min-h-[500px] items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-blue-500" />

                  <p className="mt-5 text-sm text-slate-400">
                    Analyzing project source code...
                  </p>
                </div>
              </div>
            )}

            {generated && (
              <pre className="max-h-[650px] overflow-auto rounded-xl border border-slate-800 bg-slate-950 p-6 text-sm leading-7 text-slate-300">
                <code>{generatedDocumentation}</code>
              </pre>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
