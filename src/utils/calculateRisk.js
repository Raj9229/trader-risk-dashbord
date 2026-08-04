function calculateRisk(account, stats = {}, trades = []) {
  const startingBalance = Number(account.startingBalance) || 0;
  const totalPnL = Number(stats.totalPnL) || 0;

  // Current balance comes from the starting balance plus all realized PnL.
  const currentBalance = startingBalance + totalPnL;

  // Peak balance is the highest value reached so far.
  // We use the maximum of the starting balance and the current balance.
  const peakBalance = Math.max(startingBalance, currentBalance);

  // Drawdown is how much the account has fallen from the highest balance.
  // It should never be negative.
  const currentDrawdown = Math.max(0, peakBalance - currentBalance);

  // Remaining drawdown is what is left before the maximum drawdown limit is hit.
  const maximumDrawdown = Number(account.maximumDrawdown) || 0;
  const remainingDrawdown = Math.max(0, maximumDrawdown - currentDrawdown);

  // Current day loss only counts losing trades.
  // We add the absolute value of each loss because losses are stored as negative PnL.
  const losingTrades = Array.isArray(trades)
    ? trades.filter((trade) => Number(trade.pnl) < 0)
    : [];
  const currentDayLoss = losingTrades.reduce((sum, trade) => sum + Math.abs(Number(trade.pnl)), 0);

  // Remaining daily loss is the limit minus today's losses.
  const dailyLossLimit = Number(account.dailyLossLimit) || 0;
  const remainingDailyLoss = Math.max(0, dailyLossLimit - currentDayLoss);

  // Risk status uses only the allowed labels.
  const drawdownRatio = maximumDrawdown > 0 ? currentDrawdown / maximumDrawdown : 0;
  const dailyLossRatio = dailyLossLimit > 0 ? currentDayLoss / dailyLossLimit : 0;

  let riskStatus = 'Safe';

  if (currentDrawdown >= maximumDrawdown || currentDayLoss >= dailyLossLimit) {
    riskStatus = 'At Risk';
  } else if (drawdownRatio >= 0.7 || dailyLossRatio >= 0.7) {
    riskStatus = 'Approaching Limit';
  }

  return {
    currentBalance,
    currentDrawdown,
    remainingDrawdown,
    currentDayLoss,
    remainingDailyLoss,
    riskStatus,
  };
}

export default calculateRisk;
