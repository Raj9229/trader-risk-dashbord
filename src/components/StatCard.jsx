function StatCard({ title, value, icon, change, changeType }) {
  const changeClasses = changeType === 'positive'
    ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
    : changeType === 'negative'
      ? 'border-rose-500/20 bg-rose-500/10 text-rose-400'
      : 'border-slate-700 bg-slate-800/80 text-slate-300';

  const iconClasses = changeType === 'positive'
    ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
    : changeType === 'negative'
      ? 'border-rose-500/20 bg-rose-500/10 text-rose-400'
      : 'border-slate-700 bg-slate-800/80 text-slate-400';

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-500/0 via-sky-500/60 to-sky-500/0" />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <p className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">{value}</p>
        </div>
        {icon ? <div className={`shrink-0 rounded-xl border p-2 ${iconClasses}`}>{icon}</div> : null}
      </div>

      {change ? (
        <p className={`mt-4 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${changeClasses}`}>{change}</p>
      ) : null}
    </div>
  );
}

export default StatCard;
