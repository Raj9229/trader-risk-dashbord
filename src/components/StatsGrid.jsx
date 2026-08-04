import StatCard from './StatCard';

function StatsGrid({ stats }) {
  const cards = [
    {
      title: 'Current Balance',
      value: stats.currentBalance,
      change: 'Updated today',
      changeType: 'positive',
    },
    {
      title: 'Total PnL',
      value: stats.totalPnL,
      change: 'Across all trades',
      changeType: stats.totalPnL >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Win Rate',
      value: `${stats.winRate}%`,
      change: 'Recent performance',
      changeType: 'neutral',
    },
    {
      title: 'Risk Status',
      value: 'Safe',
      change: 'Within limits',
      changeType: 'positive',
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard key={card.title} {...card} />
      ))}
    </div>
  );
}

export default StatsGrid;
