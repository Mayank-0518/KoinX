import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Graph from './Graph';

const BitcoinPrice = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'bitcoin',
            vs_currencies: 'inr,usd',
            include_24hr_change: 'true',
          },
        });
        setCryptoData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-sm">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {cryptoData && (
        <div>
          <h1 className="text-2xl font-bold">Bitcoin (BTC)</h1>
          <div>
              <p className="text-xl">USD: ${cryptoData.bitcoin.usd}</p>
              <p className="text-lg">INR: ₹{cryptoData.bitcoin.inr}</p>
              <p className="text-lg text-green-500">24h Change: {cryptoData.bitcoin.usd_24h_change}%</p>
            </div>
          <div>
           
            <Graph />
          </div>
        </div>
      )}
    </div>
  );
};

export default BitcoinPrice;
