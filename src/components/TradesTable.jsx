import { useMemo, useState } from 'react';

function TradesTable({ trades }) {
  const [filter, setFilter] = useState('All');

  const rows = useMemo(
    () => trades.map((trade) => ({
      asset: trade.asset,
      position: `${trade.side} ${trade.size}`,
      date: trade.date,
      pnl: trade.pnl,
      status: trade.status,
    })),
    [trades],
  );

  const filteredRows = useMemo(() => {
    if (filter === 'Winning Trades') {
      return rows.filter((row) => row.pnl >= 0);
    }

    if (filter === 'Losing Trades') {
      return rows.filter((row) => row.pnl < 0);
    }

    return rows;
  }, [filter, rows]);

  const formatCurrency = (value) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-800 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <h2 className="text-lg font-semibold text-white">Recent Trades</h2>

        <div className="flex flex-wrap gap-2">
          {['All', 'Winning Trades', 'Losing Trades'].map((option) => {
            const isActive = filter === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  isActive
                    ? 'border-sky-500 bg-sky-500/10 text-sky-400'
                    : 'border-slate-700 bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-h-[320px] overflow-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="sticky top-0 z-10 bg-slate-950/95 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium sm:px-6">Asset</th>
              <th className="px-4 py-3 font-medium sm:px-6">Position</th>
              <th className="px-4 py-3 font-medium sm:px-6">Time</th>
              <th className="px-4 py-3 font-medium sm:px-6">Status</th>
              <th className="px-4 py-3 font-medium sm:px-6">PnL</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => (
              <tr key={`${row.asset}-${index}`} className="border-t border-slate-800 transition hover:bg-slate-800/70">
                <td className="whitespace-nowrap px-4 py-3 text-white sm:px-6">{row.asset}</td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-300 sm:px-6">{row.position}</td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-400 sm:px-6">{row.date}</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-6">
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${row.status === 'Winner' ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/20 bg-rose-500/10 text-rose-400'}`}>
                    {row.status}
                  </span>
                </td>
                <td className={`whitespace-nowrap px-4 py-3 font-medium sm:px-6 ${row.pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {row.pnl >= 0 ? `+${formatCurrency(row.pnl)}` : formatCurrency(row.pnl)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TradesTable;
