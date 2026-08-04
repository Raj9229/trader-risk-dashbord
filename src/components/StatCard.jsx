function StatCard({ title, value, icon, change, changeType }) {
  const changeClasses = changeType === 'positive'
    ? 'text-emerald-400'
    : changeType === 'negative'
      ? 'text-rose-400'
      : 'text-slate-400';

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">{value}</p>
        </div>
        {icon ? <div className="shrink-0 text-slate-400">{icon}</div> : null}
      </div>

      {change ? (
        <p className={`mt-3 text-sm font-medium ${changeClasses}`}>{change}</p>
      ) : null}
    </div>
  );
}

export default StatCard;
