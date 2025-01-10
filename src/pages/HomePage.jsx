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

const HomePage = () => {
  return (
    <div className="container bg-gray-200 mx-auto">
      <Navbar />
      <div className='flex px-10 py-8 '>
        <div className='w-[75vw] flex-col gap-3'>
          <BitcoinPrice />
          <div className='py-4'>
           <PerformanceSection/> </div>

          <div className='py-4'>
            <SentimentSection /></div>
          <div className='py-4'>
            <AboutBitcoin /></div>
          
          <div className='py-4'>
            <Tokenomics /></div>
          <div className='py-4'>
            <Team /></div>
            <div className='py-4'>
            <YouMayLike /></div>
        </div>
        <div>
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
