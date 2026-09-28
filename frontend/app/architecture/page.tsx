"use client";

import { useState } from "react";

const architectureData = {
  overview:
    "CodeLens follows a modular full-stack architecture where the Next.js frontend communicates with a NestJS REST API. The backend handles authentication, project management, file processing, AI reviews, chat, and provider configuration.",

  frontend: [
    "Next.js App Router",
    "TypeScript",
    "Tailwind CSS",
    "Client-side project interactions",
  ],

  backend: [
    "NestJS",
    "REST API",
    "JWT Authentication",
    "Prisma ORM",
    "AI Provider abstraction",
  ],

  database: [
    "PostgreSQL",
    "Users",
    "Projects",
    "Files",
    "Reviews",
    "AI Providers",
    "Chat Sessions",
    "Messages",
  ],

  recommendations: [
    "Keep AI provider integrations behind a common provider interface.",
    "Validate uploaded files before extracting project contents.",
    "Use authentication guards for project and review endpoints.",
    "Keep database access inside dedicated service layers.",
    "Limit the amount of source code sent to AI providers when possible.",
  ],
};

export default function ArchitecturePage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setAnalyzed(false);

    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-8 py-6">
        <h1 className="text-3xl font-bold">Architecture Analysis</h1>

        <p className="mt-2 text-sm text-slate-400">
          Analyze the structure, dependencies and architecture of your uploaded
          project.
        </p>
      </header>

      <section className="p-8">
        {/* Project selection */}
        <div className="mb-6 flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Project
            </label>

            <select className="w-full max-w-xl rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500">
              <option>AI Code Review Assistant</option>
              <option>Portfolio Backend</option>
            </select>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={analyzing}
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {analyzing ? "Analyzing..." : "Analyze Architecture"}
          </button>
        </div>

        {!analyzed && !analyzing && (
          <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/30 p-16 text-center">
            <div className="text-5xl">🏗️</div>

            <h2 className="mt-5 text-xl font-semibold">
              No architecture analysis yet
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Select a project and analyze its architecture to understand the
              major components and relationships within the application.
            </p>
          </div>
        )}

        {analyzing && (
          <div className="flex min-h-[500px] items-center justify-center rounded-xl border border-slate-800 bg-slate-900/30">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-blue-500" />

              <p className="mt-5 text-sm text-slate-400">
                Analyzing project architecture...
              </p>
            </div>
          </div>
        )}

        {analyzed && (
          <div className="space-y-6">
            {/* Overview */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="text-xl font-semibold">Architecture Overview</h2>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">
                {architectureData.overview}
              </p>
            </section>

            {/* Architecture flow */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-6 text-xl font-semibold">
                System Architecture
              </h2>

              <div className="flex flex-col items-center gap-3">
                <ArchitectureBox text="Next.js Frontend" />

                <Arrow />

                <ArchitectureBox text="NestJS REST API" />

                <Arrow />

                <div className="grid w-full max-w-3xl gap-3 md:grid-cols-3">
                  <ArchitectureBox text="Authentication" />
                  <ArchitectureBox text="Project & File Management" />
                  <ArchitectureBox text="AI Review & Chat" />
                </div>

                <Arrow />

                <ArchitectureBox text="Prisma ORM" />

                <Arrow />

                <ArchitectureBox text="PostgreSQL Database" />
              </div>
            </section>

            {/* Components */}
            <section className="grid gap-6 lg:grid-cols-3">
              <AnalysisCard
                title="Frontend"
                items={architectureData.frontend}
              />

              <AnalysisCard title="Backend" items={architectureData.backend} />

              <AnalysisCard
                title="Database"
                items={architectureData.database}
              />
            </section>

            {/* Recommendations */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="text-xl font-semibold">Recommendations</h2>

              <div className="mt-5 space-y-3">
                {architectureData.recommendations.map(
                  (recommendation, index) => (
                    <div
                      key={index}
                      className="flex gap-3 rounded-lg border border-slate-800 bg-slate-950 p-4"
                    >
                      <span className="text-blue-400">{index + 1}</span>

                      <p className="text-sm leading-6 text-slate-400">
                        {recommendation}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}

function ArchitectureBox({ text }: { text: string }) {
  return (
    <div className="w-full max-w-3xl rounded-xl border border-slate-700 bg-slate-950 px-6 py-4 text-center text-sm font-medium text-slate-300">
      {text}
    </div>
  );
}

function Arrow() {
  return <div className="text-xl text-blue-500">↓</div>;
}

function AnalysisCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
      <h3 className="font-semibold">{title}</h3>

      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-sm text-slate-400">
            <span className="text-blue-400">•</span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
