const reviews = [
  {
    file: "auth.service.ts",
    type: "Security Review",
    severity: "High",
    date: "2 hours ago",
  },
  {
    file: "project.controller.ts",
    type: "Code Quality",
    severity: "Medium",
    date: "Yesterday",
  },
  {
    file: "database.service.ts",
    type: "Performance",
    severity: "Low",
    date: "2 days ago",
  },
];

export default function RecentReviews() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
        <div>
          <h3 className="font-semibold text-white">Recent Reviews</h3>
          <p className="mt-1 text-xs text-slate-500">Latest AI code analysis</p>
        </div>

        <button className="text-sm text-blue-400 hover:text-blue-300">
          View all
        </button>
      </div>

      <div className="divide-y divide-slate-800">
        {reviews.map((review) => (
          <div
            key={review.file}
            className="flex items-center justify-between px-5 py-4"
          >
            <div>
              <p className="text-sm font-medium text-white">{review.file}</p>
              <p className="mt-1 text-xs text-slate-500">
                {review.type} • {review.date}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                review.severity === "High"
                  ? "bg-red-500/10 text-red-400"
                  : review.severity === "Medium"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-green-500/10 text-green-400"
              }`}
            >
              {review.severity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
