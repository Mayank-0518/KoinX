import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        setTrendingCoins(response.data.coins.slice(0, 3));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Trending Coins (24h)</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {trendingCoins.map((coin) => (
            <li key={coin.item.id} className="mb-2">
              <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
              <p>Price: {coin.item.price_btc} BTC</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrendingCoins;
