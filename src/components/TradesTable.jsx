import { useMemo, useState } from 'react';

function TradesTable() {
  const [filter, setFilter] = useState('All');

  const rows = [
    { asset: 'EUR/USD', position: 'Long 1.25M', pnl: '+$3,200' },
    { asset: 'NASDAQ', position: 'Short 500K', pnl: '+$1,850' },
    { asset: 'Gold', position: 'Long 300K', pnl: '-$780' },
    { asset: 'BTC/USD', position: 'Long 2.00', pnl: '+$5,400' },
  ];

  const filteredRows = useMemo(() => {
    if (filter === 'Winning Trades') {
      return rows.filter((row) => !row.pnl.startsWith('-'));
    }

    if (filter === 'Losing Trades') {
      return rows.filter((row) => row.pnl.startsWith('-'));
    }

    return rows;
  }, [filter]);

  return (
    <section className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-800 px-4 py-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
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

      <div className="max-h-[280px] overflow-auto sm:max-h-[320px]">
        <table className="min-w-full text-left text-sm">
          <thead className="sticky top-0 z-10 bg-slate-950/95 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium sm:px-6">Asset</th>
              <th className="px-4 py-3 font-medium sm:px-6">Position</th>
              <th className="px-4 py-3 font-medium sm:px-6">PnL</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => (
              <tr key={`${row.asset}-${index}`} className="border-t border-slate-800 transition hover:bg-slate-800/70">
                <td className="whitespace-nowrap px-4 py-3 text-white sm:px-6">{row.asset}</td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-300 sm:px-6">{row.position}</td>
                <td className={`whitespace-nowrap px-4 py-3 font-medium sm:px-6 ${row.pnl.startsWith('-') ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {row.pnl}
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
