import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YouMayLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const url = "https://api.coingecko.com/api/v3/search/trending";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-CoinGecko-API-Key": "CG-pRNPJYpNvcL714QUCYmA12FN", // Use your API key here
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        setTrendingCoins(data.coins); // You can adjust the number of coins you want
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    className: "flex gap-x-4", // Adds horizontal gap between items
  };

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">You May Also Like</h2>

      {/* First Slider */}
      <Slider {...settings}>
        {[...trendingCoins, ...trendingCoins].map((coin, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 w-64 flex-shrink-0 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-10 h-10 mr-2"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{coin.item.name}</h3>
                <p className="text-sm text-gray-500">{coin.item.symbol.toUpperCase()}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-800 text-lg font-bold">
                ${coin.item.price_btc.toFixed(6)} BTC
              </p>
              <p
                className={`text-sm font-semibold ${
                  coin.item.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.item.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </div>

            <div>
              <img
                src={coin.item.sparkline}
                alt="Price Graph"
                className="w-full h-16 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Repeat Slider Below */}
      <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">You May Also Like (Again)</h2>
      <Slider {...settings}>
        {[...trendingCoins, ...trendingCoins].map((coin, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 gap-5 w-64 flex-shrink-0 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-10 h-10 mr-2"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{coin.item.name}</h3>
                <p className="text-sm text-gray-500">{coin.item.symbol.toUpperCase()}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-800 text-lg font-bold">
                ${coin.item.price_btc.toFixed(6)} BTC
              </p>
              <p
                className={`text-sm font-semibold ${
                  coin.item.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.item.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </div>

            <div>
              <img
                src={coin.item.sparkline}
                alt="Price Graph"
                className="w-full h-16 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YouMayLike;
