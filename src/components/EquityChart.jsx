function EquityChart() {
  return (
    <section className="flex h-[320px] flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Equity Curve</h2>
          <p className="mt-1 text-sm text-slate-400">Performance trend overview</p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-slate-800 bg-slate-950/70">
        <p className="text-sm font-medium text-slate-400">Chart Coming Soon</p>
      </div>
    </section>
  );
}

export default EquityChart;
