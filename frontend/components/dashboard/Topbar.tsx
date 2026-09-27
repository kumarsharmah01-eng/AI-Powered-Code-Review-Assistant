export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      <div>
        <h2 className="text-lg font-semibold text-white">Dashboard</h2>

        <p className="text-sm text-slate-500">
          Monitor your code review workspace
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 md:flex">
          <span className="text-slate-500">⌕</span>

          <input
            type="text"
            placeholder="Search..."
            className="w-40 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
          />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400"
        >
          ♢
        </button>

        <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            H
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">Developer</p>

            <p className="text-xs text-slate-500">Code Reviewer</p>
          </div>
        </div>
      </div>
    </header>
  );
}
