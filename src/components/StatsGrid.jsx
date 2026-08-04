import { Percent, ShieldAlert, Trophy, Wallet, TrendingDown, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';
import { formatCurrency, formatSignedCurrency } from '../utils/formatCurrency';

function StatsGrid({ stats }) {
  const formatPercent = (value) => `${value.toFixed(1)}%`;

  const cards = [
    {
      title: 'Current Balance',
      value: formatCurrency(stats.currentBalance),
      change: stats.currentBalance >= 100000 ? 'Above opening balance' : 'Tracking daily flow',
      changeType: 'positive',
      icon: <Wallet className="h-4 w-4" />,
    },
    {
      title: 'Total PnL',
      value: formatSignedCurrency(stats.totalPnL),
      change: stats.totalPnL >= 0 ? 'Momentum remains positive' : 'Needs tighter execution',
      changeType: stats.totalPnL >= 0 ? 'positive' : 'negative',
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: 'Winning Trades',
      value: stats.winningTrades,
      change: 'Positive trade count',
      changeType: 'positive',
      icon: <Trophy className="h-4 w-4" />,
    },
    {
      title: 'Losing Trades',
      value: stats.losingTrades,
      change: 'Negative trade count',
      changeType: 'negative',
      icon: <TrendingDown className="h-4 w-4" />,
    },
    {
      title: 'Largest Winning Trade',
      value: formatSignedCurrency(stats.largestWin),
      change: 'Best single trade',
      changeType: 'positive',
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: 'Largest Losing Trade',
      value: formatSignedCurrency(stats.largestLoss),
      change: 'Largest draw from a trade',
      changeType: 'negative',
      icon: <TrendingDown className="h-4 w-4" />,
    },
    {
      title: 'Win Rate',
      value: formatPercent(stats.winRate),
      change: stats.winRate >= 60 ? 'Above target pace' : 'Steady execution',
      changeType: 'neutral',
      icon: <Percent className="h-4 w-4" />,
    },
    {
      title: 'Risk Status',
      value: stats.riskStatus,
      change: stats.riskStatus === 'Safe' ? 'Within limits' : stats.riskStatus === 'Approaching Limit' ? 'Watching drawdown closely' : 'Requires attention',
      changeType: stats.riskStatus === 'Safe' ? 'positive' : stats.riskStatus === 'Approaching Limit' ? 'neutral' : 'negative',
      icon: <ShieldAlert className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard key={card.title} {...card} />
      ))}
    </div>
  );
}

export default StatsGrid;
