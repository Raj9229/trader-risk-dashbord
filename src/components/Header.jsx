import { ShieldCheck, TrendingUp } from 'lucide-react';

function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header className="border-b border-slate-800/80 bg-slate-950/95 px-4 py-4 shadow-[0_1px_0_rgba(148,163,184,0.08)] sm:px-6 sm:py-5 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-400">
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
              Risk Operations
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-400">
              <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
              Live • 24/7 monitor
            </span>
          </div>
          <h1 className="mt-3 text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
            Trader Risk Dashboard
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
            Monitor account health, portfolio risk, and trade momentum in one place.
          </p>
        </div>

        <div className="inline-flex items-center self-start rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 md:self-auto">
          <TrendingUp className="mr-2 h-4 w-4 text-sky-400" />
          {today}
        </div>
      </div>
    </header>
  );
}

export default Header;
