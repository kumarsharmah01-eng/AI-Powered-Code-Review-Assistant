"use client";

import { useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  files: number;
  reviews: number;
};

const initialProjects: Project[] = [
  {
    id: 1,
    name: "CodeLens",
    description:
      "AI-powered code review assistant for analyzing and improving source code.",
    createdAt: "September 27, 2026",
    files: 12,
    reviews: 6,
  },
  {
    id: 2,
    name: "Portfolio",
    description: "Personal developer portfolio and project showcase.",
    createdAt: "September 25, 2026",
    files: 8,
    reviews: 4,
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const [showCreateForm, setShowCreateForm] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleCreateProject = () => {
    if (!projectName.trim()) {
      return;
    }

    const newProject: Project = {
      id: Date.now(),
      name: projectName,
      description: projectDescription || "No project description provided.",
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      files: 0,
      reviews: 0,
    };

    setProjects((currentProjects) => [...currentProjects, newProject]);

    setProjectName("");
    setProjectDescription("");
    setShowCreateForm(false);
  };

  const handleDeleteProject = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?",
    );

    if (!confirmed) {
      return;
    }

    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== id),
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white md:px-10">
      {/* Header */}
      <section className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <span>CodeLens</span>
            <span>/</span>
            <span className="text-slate-300">Projects</span>
          </div>

          <h1 className="text-3xl font-bold">Projects</h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your codebases and start AI-powered reviews.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowCreateForm(true)}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          + New Project
        </button>
      </section>

      {/* Create project form */}
      {showCreateForm && (
        <section className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Create New Project</h2>

            <p className="mt-1 text-sm text-slate-500">
              Add a project that you want to analyze with CodeLens.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Project Name
              </label>

              <input
                type="text"
                value={projectName}
                onChange={(event) => setProjectName(event.target.value)}
                placeholder="e.g. My Backend API"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Description
              </label>

              <textarea
                value={projectDescription}
                onChange={(event) => setProjectDescription(event.target.value)}
                placeholder="Describe your project..."
                rows={4}
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowCreateForm(false);
                  setProjectName("");
                  setProjectDescription("");
                }}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleCreateProject}
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                Create Project
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Project count */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Your Projects</h2>

          <p className="mt-1 text-sm text-slate-500">
            {projects.length} project
            {projects.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Projects */}
      {projects.length === 0 ? (
        <section className="rounded-xl border border-dashed border-slate-800 bg-slate-900/40 p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-2xl text-slate-500">
            ◇
          </div>

          <h2 className="mt-5 text-lg font-semibold">No projects yet</h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Create your first project and upload your code to start an
            AI-powered review.
          </p>

          <button
            type="button"
            onClick={() => setShowCreateForm(true)}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium hover:bg-blue-500"
          >
            Create Project
          </button>
        </section>
      ) : (
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700"
            >
              {/* Card header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10 text-lg text-blue-400">
                    ◇
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{project.name}</h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Created {project.createdAt}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="text-slate-600 transition hover:text-slate-300"
                >
                  •••
                </button>
              </div>

              {/* Description */}
              <p className="mt-5 min-h-[48px] text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-950 p-3">
                  <p className="text-xs text-slate-500">Files</p>

                  <p className="mt-1 text-lg font-semibold">{project.files}</p>
                </div>

                <div className="rounded-lg bg-slate-950 p-3">
                  <p className="text-xs text-slate-500">Reviews</p>

                  <p className="mt-1 text-lg font-semibold">
                    {project.reviews}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                  Open Project →
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteProject(project.id)}
                  className="text-sm text-red-400 transition hover:text-red-300"
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
