import { formatCurrency } from '../utils/formatCurrency';

function ProgressBar({ value, max, tone }) {
  const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  const toneClasses = {
    safe: 'bg-emerald-500',
    warning: 'bg-amber-400',
    danger: 'bg-rose-500',
  };

  return (
    <div className="h-2.5 rounded-full bg-slate-800">
      <div className={`h-2.5 rounded-full ${toneClasses[tone]}`} style={{ width: `${percentage}%` }} />
    </div>
  );
}

function getBadgeStyles(status) {
  if (status === 'Safe') {
    return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400';
  }

  if (status === 'Approaching Limit') {
    return 'border-amber-500/30 bg-amber-500/10 text-amber-400';
  }

  return 'border-rose-500/30 bg-rose-500/10 text-rose-400';
}

function RiskOverview({ risk }) {
  const tone = risk.riskStatus === 'High Risk' ? 'danger' : risk.riskStatus === 'Approaching Limit' ? 'warning' : 'safe';

  const items = [
    {
      label: 'Current Drawdown',
      value: formatCurrency(risk.currentDrawdown),
      valueForProgress: risk.currentDrawdown,
      max: 10000,
    },
    {
      label: 'Remaining Drawdown',
      value: formatCurrency(risk.remainingDrawdown),
      valueForProgress: risk.remainingDrawdown,
      max: 10000,
    },
    {
      label: 'Daily Loss',
      value: formatCurrency(risk.currentDayLoss),
      valueForProgress: risk.currentDayLoss,
      max: 5000,
    },
    {
      label: 'Remaining Daily Loss',
      value: formatCurrency(risk.remainingDailyLoss),
      valueForProgress: risk.remainingDailyLoss,
      max: 5000,
    },
  ];

  const badgeClass = getBadgeStyles(risk.riskStatus);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Risk Overview</h2>
          <p className="mt-1 text-sm text-slate-400">Portfolio exposure and drawdown health</p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-sm font-medium ${badgeClass}`}>
          {risk.riskStatus}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-800/80 bg-slate-950/70 p-3">
            <div className="mb-2 flex items-center justify-between gap-3 text-sm">
              <span className="text-slate-300">{item.label}</span>
              <span className="font-medium text-white">{item.value}</span>
            </div>
            <ProgressBar value={item.valueForProgress} max={item.max} tone={tone} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RiskOverview;
