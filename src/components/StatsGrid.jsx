import StatCard from './StatCard';

function StatsGrid() {
  const stats = [
    { title: 'Current Balance', value: '$103,250', change: '+2.4% today', changeType: 'positive' },
    { title: 'Total PnL', value: '+$3,250', change: '+8.1% this month', changeType: 'positive' },
    { title: 'Win Rate', value: '60%', change: 'Stable', changeType: 'neutral' },
    { title: 'Risk Status', value: 'Safe', change: 'Within limits', changeType: 'positive' },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}

export default StatsGrid;
