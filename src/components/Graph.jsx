import React, { useEffect } from 'react';

const Graph = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: '100%',
        height: 400,
        symbol: 'BITSTAMP:BTCUSD',
        interval: '30',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '3', // Use "3" for an area chart like in the image
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: false, // Disable changing symbols for consistency
        hide_side_toolbar: true, // Hide side toolbar for a cleaner look
        backgroundColor: '#ffffff', // White background
        lineColor: '#2962FF', // Set line color to blue
        container_id: 'tradingview_btc',
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="tradingview_btc" className="mt-4" />;
};

export default Graph;