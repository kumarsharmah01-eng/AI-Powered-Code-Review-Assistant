"use client";

import { useMemo, useState } from "react";

type Review = {
  id: number;
  project: string;
  file: string;
  template: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  date: string;
  summary: string;
};

const reviews: Review[] = [
  {
    id: 1,
    project: "AI Code Review Assistant",
    file: "src/auth/auth.service.ts",
    template: "Security",
    severity: "High",
    date: "Sep 27, 2026",
    summary:
      "Authentication logic should use secure password hashing and stronger credential validation.",
  },
  {
    id: 2,
    project: "AI Code Review Assistant",
    file: "src/projects/project.service.ts",
    template: "Code Quality",
    severity: "Medium",
    date: "Sep 26, 2026",
    summary:
      "Service contains duplicated logic that could be extracted into reusable methods.",
  },
  {
    id: 3,
    project: "AI Code Review Assistant",
    file: "src/database/database.service.ts",
    template: "Performance",
    severity: "Low",
    date: "Sep 25, 2026",
    summary:
      "Database queries could be optimized by reducing unnecessary repeated requests.",
  },
  {
    id: 4,
    project: "Portfolio Backend",
    file: "src/contact/contact.controller.ts",
    template: "Security",
    severity: "Critical",
    date: "Sep 24, 2026",
    summary:
      "User input should be validated and sanitized before being processed.",
  },
];

export default function ReviewsPage() {
  const [search, setSearch] = useState("");
  const [template, setTemplate] = useState("All");
  const [severity, setSeverity] = useState("All");

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const matchesSearch =
        review.project.toLowerCase().includes(search.toLowerCase()) ||
        review.file.toLowerCase().includes(search.toLowerCase()) ||
        review.summary.toLowerCase().includes(search.toLowerCase());

      const matchesTemplate =
        template === "All" || review.template === template;

      const matchesSeverity =
        severity === "All" || review.severity === severity;

      return matchesSearch && matchesTemplate && matchesSeverity;
    });
  }, [search, template, severity]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold">Review History</h1>

          <p className="mt-2 text-sm text-slate-400">
            View and search previous AI code reviews.
          </p>
        </div>
      </header>

      <section className="p-8">
        {/* Filters */}
        <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Search */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Search
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search project, file or issue..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Template */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Review Template
              </label>

              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
              >
                <option>All</option>
                <option>Security</option>
                <option>Performance</option>
                <option>Code Quality</option>
              </select>
            </div>

            {/* Severity */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Severity
              </label>

              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
              >
                <option>All</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Result count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            {filteredReviews.length} review
            {filteredReviews.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-semibold text-white">
                        {review.file}
                      </h2>

                      <SeverityBadge severity={review.severity} />
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      {review.project}
                    </p>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                      {review.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-300">
                        {review.template}
                      </span>

                      <span className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-400">
                        {review.date}
                      </span>
                    </div>
                  </div>

                  <button className="shrink-0 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/30 p-12 text-center">
              <div className="text-4xl">🔍</div>

              <h2 className="mt-4 font-semibold">No reviews found</h2>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function SeverityBadge({ severity }: { severity: Review["severity"] }) {
  const styles = {
    Critical: "bg-red-500/10 text-red-400 border-red-500/20",
    High: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Low: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${styles[severity]}`}
    >
      {severity}
    </span>
  );
}
