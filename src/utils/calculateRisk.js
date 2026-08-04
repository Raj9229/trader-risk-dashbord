function calculateRisk(account, stats) {
  // Current drawdown is the difference between the starting balance and the current balance.
  const currentDrawdown = account.startingBalance - account.currentBalance;

  // Remaining drawdown is the amount of drawdown still allowed before reaching the max limit.
  const remainingDrawdown = account.maximumDrawdown - currentDrawdown;

  // Current day loss is the difference between the starting balance and the current balance for today.
  // In this simple example, we use the same balance difference as the current day loss value.
  const currentDayLoss = account.startingBalance - account.currentBalance;

  // Remaining daily loss is the daily loss allowance left before hitting the limit.
  const remainingDailyLoss = account.dailyLossLimit - currentDayLoss;

  // Risk status is set based on whether the current drawdown is still within the allowed limit.
  const riskStatus = currentDrawdown <= account.maximumDrawdown ? 'Safe' : 'High Risk';

  return {
    currentDrawdown,
    remainingDrawdown,
    currentDayLoss,
    remainingDailyLoss,
    riskStatus,
  };
}

export default calculateRisk;
