function calculateStats(trades) {
  // Convert each trade's pnl string to a number so we can calculate totals.
  const numericPnL = trades.map((trade) => Number(trade.pnl));

  // Sum all PnL values to get the overall total profit or loss.
  const totalPnL = numericPnL.reduce((sum, value) => sum + value, 0);

  // Count trades where the PnL is positive.
  const winningTrades = numericPnL.filter((value) => value > 0).length;

  // Count trades where the PnL is negative.
  const losingTrades = numericPnL.filter((value) => value < 0).length;

  // Calculate the win rate as a percentage of winning trades over total trades.
  const winRate = trades.length > 0 ? (winningTrades / trades.length) * 100 : 0;

  // Find the largest positive PnL value.
  const largestWin = numericPnL.filter((value) => value > 0).length > 0
    ? Math.max(...numericPnL.filter((value) => value > 0))
    : 0;

  // Find the largest negative PnL value.
  const largestLoss = numericPnL.filter((value) => value < 0).length > 0
    ? Math.min(...numericPnL.filter((value) => value < 0))
    : 0;

  return {
    totalPnL,
    winningTrades,
    losingTrades,
    winRate,
    largestWin,
    largestLoss,
  };
}

export default calculateStats;
