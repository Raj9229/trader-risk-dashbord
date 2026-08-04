function StatCard({ title, value, icon, change, changeType }) {
  const changeClasses = changeType === 'positive'
    ? 'text-emerald-400'
    : changeType === 'negative'
      ? 'text-rose-400'
      : 'text-slate-400';

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
        </div>
        {icon ? <div className="text-slate-400">{icon}</div> : null}
      </div>

      {change ? (
        <p className={`mt-3 text-sm font-medium ${changeClasses}`}>{change}</p>
      ) : null}
    </div>
  );
}

export default StatCard;
