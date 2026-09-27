type ProjectCardProps = {
  name: string;
  description: string;
  files: number;
  reviews: number;
};

export default function ProjectCard({
  name,
  description,
  files,
  reviews,
}: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-blue-500/40">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
            ◇
          </div>

          <div>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="text-xs text-slate-500">Recently updated</p>
          </div>
        </div>

        <button type="button" className="text-slate-500 hover:text-white">
          •••
        </button>
      </div>

      <p className="mt-4 line-clamp-2 text-sm text-slate-400">{description}</p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
        <div className="flex gap-4 text-xs text-slate-500">
          <span>{files} files</span>
          <span>{reviews} reviews</span>
        </div>

        <button
          type="button"
          className="text-sm font-medium text-blue-400 hover:text-blue-300"
        >
          Open →
        </button>
      </div>
    </div>
  );
}
