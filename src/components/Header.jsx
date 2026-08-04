function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header className="border-b border-slate-800 bg-slate-950/95 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Risk Operations
          </p>
          <h1 className="mt-2 text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
            Trader Risk Dashboard
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
            Monitor trading performance and account risk
          </p>
        </div>

        <div className="self-start rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 md:self-auto">
          {today}
        </div>
      </div>
    </header>
  );
}

export default Header;
