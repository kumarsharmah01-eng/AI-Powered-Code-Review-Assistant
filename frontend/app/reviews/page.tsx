"use client";

import { useState } from "react";

const reviews = [
  {
    id: 1,
    file: "auth.service.ts",
    project: "CodeLens",
    type: "Security",
    severity: "High",
    date: "September 28, 2026",
  },
  {
    id: 2,
    file: "project.service.ts",
    project: "CodeLens",
    type: "Code Quality",
    severity: "Medium",
    date: "September 27, 2026",
  },
  {
    id: 3,
    file: "database.service.ts",
    project: "Portfolio",
    type: "Performance",
    severity: "Low",
    date: "September 26, 2026",
  },
];

export default function ReviewsPage() {
  const [search, setSearch] = useState("");

  const filteredReviews = reviews.filter((review) =>
    `${review.file} ${review.project} ${review.type}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Review History</h1>

          <p className="mt-2 text-sm text-slate-500">
            Search and review previous AI code analysis results.
          </p>
        </div>

        <div className="mb-6">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search reviews..."
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          <div className="grid grid-cols-5 border-b border-slate-800 px-5 py-4 text-xs font-medium uppercase tracking-wide text-slate-500">
            <span>File</span>
            <span>Project</span>
            <span>Template</span>
            <span>Severity</span>
            <span>Date</span>
          </div>

          {filteredReviews.map((review) => (
            <button
              key={review.id}
              type="button"
              className="grid w-full grid-cols-5 border-b border-slate-800 px-5 py-5 text-left text-sm transition last:border-b-0 hover:bg-slate-800/40"
            >
              <span className="font-medium text-white">{review.file}</span>

              <span className="text-slate-400">{review.project}</span>

              <span className="text-slate-400">{review.type}</span>

              <span>
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    review.severity === "High"
                      ? "bg-red-500/10 text-red-400"
                      : review.severity === "Medium"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-green-500/10 text-green-400"
                  }`}
                >
                  {review.severity}
                </span>
              </span>

              <span className="text-slate-500">{review.date}</span>
            </button>
          ))}

          {filteredReviews.length === 0 && (
            <div className="p-10 text-center text-sm text-slate-500">
              No reviews found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
