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
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Trending Coins (24h)</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul className="space-y-4">
          {trendingCoins.map((coin) => (
            <li key={coin.item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <img src={coin.item.small} alt={coin.item.name} className="w-10 h-10 mr-4" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
                </div>
              </div>
              <p className={`text-lg font-semibold ${
                  coin.item.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
                }`}>
                {coin.item.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrendingCoins;
