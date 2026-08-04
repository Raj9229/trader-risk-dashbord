function generateEquityCurve(startingBalance, trades) {
  // Start with the opening balance.
  let balance = startingBalance;

  // Create a list that stores the balance after each trade.
  const equityCurve = [{ tradeNumber: 0, balance }];

  // Loop through each trade and update the balance.
  trades.forEach((trade, index) => {
    // Convert the PnL string into a number.
    const pnlValue = Number(trade.pnl);

    // Add the trade PnL to the current balance.
    balance += pnlValue;

    // Save the updated balance for this trade number.
    equityCurve.push({ tradeNumber: index + 1, balance });
  });

  return equityCurve;
}

export default generateEquityCurve;
