const links = ['Overview', 'Positions', 'Alerts', 'Reports'];

function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 bg-slate-900 p-6 text-white">
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Risk Desk</h2>
        <p className="text-sm text-slate-400">Trader monitoring</p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            {link}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
