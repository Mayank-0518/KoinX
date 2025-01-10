import React from 'react';

const CoinDetails = ({ coin }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h3>
      <p>Price: {coin.price_btc} BTC</p>
      <p>Market Cap: ${coin.market_cap}</p>
    </div>
  );
};

export default CoinDetails;
