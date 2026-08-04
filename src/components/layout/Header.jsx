function Header() {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Trader Risk Dashboard</p>
          <h1 className="text-xl font-semibold text-slate-900">Portfolio overview</h1>
        </div>
        <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          Live monitoring
        </div>
      </div>
    </header>
  );
}

export default Header;
