import Header from '../components/Header';
import DashboardView from '../components/Dashboard';

function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <DashboardView />
    </div>
  );
}

export default DashboardPage;
