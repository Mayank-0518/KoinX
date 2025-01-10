import React from 'react';
import Navbar from '../components/Navbar';
import SentimentSection from '../components/SentimentSection';
import AboutBitcoin from '../components/AboutBitcoin';
import Tokenomics from '../components/Tokenomics';
import Team from '../components/Team';
import BitcoinPrice from '../components/BitcoinPrice';
import TrendingCoins from '../components/TrendingCoins';
import PerformanceSection from '../components/PerformanceSection';
import YouMayLike from '../components/Youmaylike';
import side from "../assets/side.png";

const HomePage = () => {
  return (
    <div className="bg-gray-200 min-w-full min-h-screen">
      <Navbar />
      <div className="flex px-10 py-8">
        {/* Main Content Section */}
        <div className="w-2/3 flex flex-col gap-3">
          <BitcoinPrice />
          <div className="py-4">
            <PerformanceSection />
          </div>
          <div className="py-4">
            <SentimentSection />
          </div>
          <div className="py-4">
            <AboutBitcoin />
          </div>
          <div className="py-4">
            <Tokenomics />
          </div>
          <div className="py-4">
            <Team />
          </div>
          <div className="py-4">
            <YouMayLike />
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="ml-5 w-1/3 flex flex-col gap-6">
          <img src={side} alt="Side Image" className="w-full" />
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
