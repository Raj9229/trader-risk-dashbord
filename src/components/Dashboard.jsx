import Header from './Header';
import StatsGrid from './StatsGrid';
import RiskOverview from './RiskOverview';
import EquityChart from './EquityChart';
import TradesTable from './TradesTable';
import trades from '../data/trades';
import account from '../data/account';
import calculateStats from '../utils/calculateStats';
import calculateRisk from '../utils/calculateRisk';
import generateEquityCurve from '../utils/generateEquityCurve';

function Dashboard() {
  const calculatedStats = calculateStats(trades);
  const currentBalance = account.startingBalance + calculatedStats.totalPnL;
  const stats = {
    currentBalance,
    totalPnL: calculatedStats.totalPnL,
    winRate: calculatedStats.winRate,
    winningTrades: calculatedStats.winningTrades,
    losingTrades: calculatedStats.losingTrades,
    largestWin: calculatedStats.largestWin,
    largestLoss: calculatedStats.largestLoss,
  };
  const risk = calculateRisk(account, stats, trades);
  const statsWithStatus = {
    ...stats,
    riskStatus: risk.riskStatus,
  };
  const equityCurve = generateEquityCurve(account.startingBalance, trades);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <StatsGrid stats={statsWithStatus} />

        <section className="grid gap-5 xl:grid-cols-2">
          <RiskOverview risk={risk} />
          <EquityChart data={equityCurve} />
        </section>

        <TradesTable trades={trades} />
      </main>
    </div>
  );
}

export default Dashboard;
