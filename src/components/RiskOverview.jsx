function RiskOverview() {
  const items = [
    { label: 'Current Drawdown', value: '$24,500', progress: 68 },
    { label: 'Remaining Drawdown', value: '$12,000', progress: 42 },
    { label: 'Daily Loss', value: '$3,200', progress: 31 },
    { label: 'Remaining Daily Loss', value: '$6,800', progress: 58 },
  ];

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Risk Overview</h2>
          <p className="mt-1 text-sm text-slate-400">Portfolio exposure and drawdown health</p>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
          Stable
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-300">{item.label}</span>
              <span className="font-medium text-white">{item.value}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-slate-400" style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RiskOverview;
