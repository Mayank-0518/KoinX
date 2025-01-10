import React from "react";

const PerformanceSection = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className=" pb-4 mb-4">
        <h2 className="text-lg font-bold text-gray-700">Performance</h2>
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm">
            <p>Today's Low</p>
            <p className="font-bold text-red-500">46,930.22</p>
          </div>
          <div className="w-full mx-4 relative">
            <div className="h-1 bg-gray-300 rounded-full">
              <div
                className="absolute h-1 bg-green-500 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div
              className="absolute w-3 h-3 bg-black rounded-full"
              style={{ left: "70%", transform: "translate(-50%, -50%)", top: "-6px" }}
            ></div>
          </div>
          <div className="text-sm">
            <p>Today's High</p>
            <p className="font-bold text-green-500">49,343.83</p>
          </div>
        </div>
        
      </div>
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm">
            <p>52W Low</p>
            <p className="font-bold text-red-500">46,930.22</p>
          </div>
          <div className="w-full mx-4 relative">
            <div className="h-1 bg-gray-300 rounded-full">
              <div
                className="absolute h-1 bg-green-500 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div
              className="absolute w-3 h-3 bg-black rounded-full"
              style={{ left: "70%", transform: "translate(-50%, -50%)", top: "-6px" }}
            ></div>
          </div>
          <div className="text-sm">
            <p>52W High</p>
            <p className="font-bold text-green-500">49,343.83</p>
          </div>
        </div>
        
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-700">Fundamentals</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p>Bitcoin Price</p>
            <p className="font-bold text-gray-800">$16,815.46</p>
          </div>
          <div>
            <p>Market Cap</p>
            <p className="font-bold text-gray-800">$323,507,290,047</p>
          </div>
          <div>
            <p>24h Low / 24h High</p>
            <p className="font-bold text-gray-800">$16,382.07 / $16,874.12</p>
          </div>
          <div>
            <p>Market Cap Dominance</p>
            <p className="font-bold text-gray-800">38.343%</p>
          </div>
          <div>
            <p>7d Low / 7d High</p>
            <p className="font-bold text-gray-800">$16,382.07 / $16,874.12</p>
          </div>
          <div>
            <p>Volume / Market Cap</p>
            <p className="font-bold text-gray-800">0.0718</p>
          </div>
          <div>
            <p>Trading Volume</p>
            <p className="font-bold text-gray-800">$23,249,202,782</p>
          </div>
          <div>
            <p>All-Time High</p>
            <p className="font-bold text-gray-800">
              $69,044.77 <span className="text-red-500">-75.6%</span>
            </p>
            <p className="text-xs text-gray-400">Nov 10, 2021</p>
          </div>
          <div>
            <p>Market Cap Rank</p>
            <p className="font-bold text-gray-800">#1</p>
          </div>
          <div>
            <p>All-Time Low</p>
            <p className="font-bold text-gray-800">
              $67.81 <span className="text-green-500">24,729.1%</span>
            </p>
            <p className="text-xs text-gray-400">Jul 06, 2013</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;