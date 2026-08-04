import AppLayout from '../components/layout/AppLayout';
import SummaryCard from '../components/dashboard/SummaryCard';
import { dashboardData } from '../data/mockRiskData';
import { formatCurrency } from '../utils/formatters';

function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <section className="grid gap-4 md:grid-cols-3">
          {dashboardData.summary.map((item) => (
            <SummaryCard
              key={item.title}
              title={item.title}
              value={item.value}
              detail={item.detail}
            />
          ))}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Risk watchlist</h2>
          <div className="mt-4 space-y-3">
            {dashboardData.watchlist.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="font-medium text-slate-800">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{formatCurrency(item.exposure)}</p>
                  <p className="text-sm text-amber-600">{item.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

export default DashboardPage;
