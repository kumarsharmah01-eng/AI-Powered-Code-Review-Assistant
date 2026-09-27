type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: string;
};

export default function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-lg text-blue-400">
          {icon}
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500">{description}</p>
    </div>
  );
}
