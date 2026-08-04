function TradesTable() {
  const rows = [
    { asset: 'EUR/USD', position: 'Long 1.25M', pnl: '+$3,200' },
    { asset: 'NASDAQ', position: 'Short 500K', pnl: '+$1,850' },
    { asset: 'Gold', position: 'Long 300K', pnl: '-$780' },
    { asset: 'BTC/USD', position: 'Long 2.00', pnl: '+$5,400' },
  ];

  return (
    <section className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm">
      <div className="border-b border-slate-800 px-6 py-4">
        <h2 className="text-lg font-semibold text-white">Recent Trades</h2>
      </div>

      <div className="max-h-[320px] overflow-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="sticky top-0 z-10 bg-slate-950/95 text-slate-400">
            <tr>
              <th className="px-6 py-3 font-medium">Asset</th>
              <th className="px-6 py-3 font-medium">Position</th>
              <th className="px-6 py-3 font-medium">PnL</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.asset}-${index}`} className="border-t border-slate-800 transition hover:bg-slate-800/70">
                <td className="px-6 py-3 text-white">{row.asset}</td>
                <td className="px-6 py-3 text-slate-300">{row.position}</td>
                <td className={`px-6 py-3 font-medium ${row.pnl.startsWith('-') ? 'text-rose-400' : 'text-emerald-400'}`}>
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
