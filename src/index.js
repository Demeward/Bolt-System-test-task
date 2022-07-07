const main = (operations) => {
  const calculateProfit = (operations) => {
    const profit = operations.reduce(function(previousValue, {type, price, qnt}) {
      if (type === 'BUY') {
        return previousValue + -(price * qnt)
      }
       else if (type === 'SELL') {
           return previousValue + (price * qnt)
         }
    }, 0);

    return profit;
  }

  const calculateTickersProfit = (operations) => {
    const tickers = Array.from(new Set(operations.map(operation => operation.ticker)));
    let portfolio = {};
    tickers.forEach((ticker) => {
      let tickerOperations = operations.filter((operation) => ticker === operation.ticker)
      portfolio[ticker] = calculateProfit(tickerOperations)
    });
    return portfolio;
  }


    return {
        absProfit: calculateProfit(operations),
        portfolio: calculateTickersProfit(operations),
    };
}

module.exports = main;
