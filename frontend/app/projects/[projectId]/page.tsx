"use client";

import { useState } from "react";

type FileItem = {
  id: number;
  name: string;
  type: "file" | "folder";
  language?: string;
};

const files: FileItem[] = [
  {
    id: 1,
    name: "src",
    type: "folder",
  },
  {
    id: 2,
    name: "auth",
    type: "folder",
  },
  {
    id: 3,
    name: "auth.service.ts",
    type: "file",
    language: "TypeScript",
  },
  {
    id: 4,
    name: "auth.controller.ts",
    type: "file",
    language: "TypeScript",
  },
  {
    id: 5,
    name: "projects",
    type: "folder",
  },
  {
    id: 6,
    name: "project.service.ts",
    type: "file",
    language: "TypeScript",
  },
  {
    id: 7,
    name: "main.ts",
    type: "file",
    language: "TypeScript",
  },
  {
    id: 8,
    name: "package.json",
    type: "file",
    language: "JSON",
  },
];

const sampleCode = `import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

  async login(email: string, password: string) {

    const user = await this.findUser(email);

    if (!user) {
      throw new Error("User not found");
    }

    return {
      accessToken: "token",
      user,
    };
  }

  private async findUser(email: string) {
    return this.database.users.findUnique({
      where: { email },
    });
  }
}`;

export default function ProjectDetailsPage() {
  const [selectedFile, setSelectedFile] = useState("auth.service.ts");

  const [reviewType, setReviewType] = useState("Code Quality");

  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);

    setTimeout(() => {
      setUploading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-8 py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
              <span>Projects</span>
              <span>/</span>
              <span className="text-slate-300">CodeLens</span>
            </div>

            <h1 className="text-2xl font-bold">CodeLens</h1>

            <p className="mt-1 text-sm text-slate-500">
              AI-powered code review assistant
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleUpload}
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              {uploading ? "Uploading..." : "Upload ZIP"}
            </button>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium hover:bg-blue-500"
            >
              Review All Files
            </button>
          </div>
        </div>
      </header>

      {/* Workspace */}
      <div className="grid min-h-[calc(100vh-110px)] lg:grid-cols-[260px_1fr]">
        {/* Explorer */}
        <aside className="border-r border-slate-800">
          <div className="border-b border-slate-800 px-5 py-4">
            <h2 className="text-sm font-semibold">Code Explorer</h2>

            <p className="mt-1 text-xs text-slate-500">8 project files</p>
          </div>

          <div className="p-3">
            {files.map((file) => {
              const selected = selectedFile === file.name;

              return (
                <button
                  key={file.id}
                  type="button"
                  disabled={file.type === "folder"}
                  onClick={() => {
                    if (file.type === "file") {
                      setSelectedFile(file.name);
                    }
                  }}
                  className={`mb-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm ${
                    selected
                      ? "bg-blue-600/10 text-blue-400"
                      : "text-slate-400 hover:bg-slate-900"
                  }`}
                >
                  <span>{file.type === "folder" ? "📁" : "📄"}</span>

                  <span>{file.name}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main editor */}
        <section className="min-w-0">
          {/* File toolbar */}
          <div className="flex flex-col gap-4 border-b border-slate-800 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium">{selectedFile}</p>

              <p className="mt-1 text-xs text-slate-500">TypeScript</p>
            </div>

            <div className="flex gap-3">
              <select
                value={reviewType}
                onChange={(event) => setReviewType(event.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 outline-none"
              >
                <option>Security</option>
                <option>Performance</option>
                <option>Code Quality</option>
              </select>

              <button
                type="button"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
              >
                Review File
              </button>
            </div>
          </div>

          {/* Code preview */}
          <div className="min-h-[500px] overflow-auto bg-[#080d16] p-6">
            <pre className="font-mono text-sm leading-7 text-slate-300">
              <code>{sampleCode}</code>
            </pre>
          </div>

          {/* AI Review */}
          <section className="border-t border-slate-800 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">AI Code Review</h2>

              <p className="mt-1 text-sm text-slate-500">
                Choose a review template for the selected source code.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <ReviewCard
                title="Security"
                description="Find security vulnerabilities and risky patterns."
              />

              <ReviewCard
                title="Performance"
                description="Identify inefficient code and performance bottlenecks."
              />

              <ReviewCard
                title="Code Quality"
                description="Improve readability, structure and maintainability."
              />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function ReviewCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-left hover:border-blue-500/40"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
        ✦
      </div>

      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
    </button>
  );
}
