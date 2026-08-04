import { DollarSign, Percent, Shield, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';

function StatsGrid({ stats }) {
  const formatCurrency = (value) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

  const formatSignedCurrency = (value) => {
    const formatted = formatCurrency(value);
    return value >= 0 ? `+${formatted}` : formatted;
  };

  const formatPercent = (value) => `${value.toFixed(1)}%`;

  const cards = [
    {
      title: 'Current Balance',
      value: formatCurrency(stats.currentBalance),
      change: stats.currentBalance >= 100000 ? 'Above opening balance' : 'Tracking daily flow',
      changeType: 'positive',
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: 'Total PnL',
      value: formatSignedCurrency(stats.totalPnL),
      change: stats.totalPnL >= 0 ? 'Momentum remains positive' : 'Needs tighter execution',
      changeType: stats.totalPnL >= 0 ? 'positive' : 'negative',
      icon: <TrendingUp className="h-4 w-4" />,
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
      icon: <Shield className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard key={card.title} {...card} />
      ))}
    </div>
  );
}

export default StatsGrid;
