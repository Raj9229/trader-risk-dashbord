const statCards = [
  { label: 'Net P&L', value: '$842K', change: '+8.2% vs goal' },
  { label: 'Gross Exposure', value: '$24.6M', change: 'Within limit' },
  { label: 'Margin Utilization', value: '68%', change: 'Stable' },
  { label: 'Open Positions', value: '47', change: '12 new today' },
];

function StatCard({ label, value, change }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-emerald-400">{change}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Risk Overview</h2>
              <p className="mt-1 text-sm text-slate-400">Current exposure by desk</p>
            </div>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
              Live
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {[
              { name: 'FX', value: '41%', tone: 'bg-emerald-500' },
              { name: 'Rates', value: '28%', tone: 'bg-sky-500' },
              { name: 'Credit', value: '19%', tone: 'bg-amber-500' },
              { name: 'Equities', value: '12%', tone: 'bg-rose-500' },
            ].map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-300">{item.name}</span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className={`h-2 rounded-full ${item.tone}`} style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Equity Chart</h2>
              <p className="mt-1 text-sm text-slate-400">Portfolio value trend</p>
            </div>
            <span className="text-sm font-medium text-slate-400">01 May — 31 May</span>
          </div>

          <div className="mt-8 flex h-48 items-end justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            {[44, 68, 52, 76, 63, 84, 72].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-lg bg-slate-700" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Trade Table</h2>
            <p className="mt-1 text-sm text-slate-400">Latest executed trades</p>
          </div>
          <span className="text-sm text-slate-400">Updated 5 min ago</span>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
          <div className="grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr] bg-slate-950 px-4 py-3 text-sm font-medium text-slate-400">
            <span>Instrument</span>
            <span>Desk</span>
            <span>Size</span>
            <span>Status</span>
          </div>
          {[
            ['EUR/USD', 'FX', '1.25M', 'Filled'],
            ['US 10Y', 'Rates', '800K', 'Pending'],
            ['AAPL', 'Equities', '250K', 'Filled'],
          ].map(([instrument, desk, size, status]) => (
            <div key={instrument} className="grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr] border-t border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
              <span className="font-medium text-white">{instrument}</span>
              <span>{desk}</span>
              <span>{size}</span>
              <span className="text-emerald-400">{status}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
