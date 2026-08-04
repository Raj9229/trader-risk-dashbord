function RiskOverview({ risk }) {
  const items = [
    { label: 'Current Drawdown', value: `$${risk.currentDrawdown.toLocaleString()}`, progress: 68 },
    { label: 'Remaining Drawdown', value: `$${risk.remainingDrawdown.toLocaleString()}`, progress: 42 },
    { label: 'Current Day Loss', value: `$${risk.currentDayLoss.toLocaleString()}`, progress: 31 },
    { label: 'Remaining Daily Loss', value: `$${risk.remainingDailyLoss.toLocaleString()}`, progress: 58 },
  ];

  const badgeClass = risk.riskStatus === 'Safe'
    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
    : 'border-rose-500/30 bg-rose-500/10 text-rose-400';

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Risk Overview</h2>
          <p className="mt-1 text-sm text-slate-400">Portfolio exposure and drawdown health</p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-sm font-medium ${badgeClass}`}>
          {risk.riskStatus}
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
