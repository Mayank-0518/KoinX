import React, { useState } from "react";
import SliderCard from "./SliderCard";

const SentimentSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    {
      gradientColor: "linear-gradient(to right, #e0f7fa, #b2ebf2)",
      content: {
        title:
          "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pharetra risus est faucibus metus quis.",
      },
    },
    {
      gradientColor: "linear-gradient(to right, #e8f5e9, #c8e6c9)",
      content: {
        title:
          "Another event title. Amet sapien quam viverra adipiscing condimentum.",
        description:
          "Pharetra risus est faucibus metus quis. Lorem ipsum dolor sit amet adipiscing.",
      },
    },
    {
      gradientColor: "linear-gradient(to right, #fce4ec, #f8bbd0)",
      content: {
        title:
          "Third event title here. Lorem ipsum dolor sit amet consectetur.",
        description:
          "Vitae sit nisi viverra natoque lacinia libero enim adipiscing condimentum.",
      },
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Sentiment Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sentiment</h2>

      {/* Key Events Slider */}
      <div className="relative flex gap-4 overflow-hidden">
        <button
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
          onClick={handlePrevious}
        >
          ←
        </button>
        <div className="flex gap-4 transition-transform duration-300" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {sliderData.map((item, index) => (
            <SliderCard
              key={index}
              gradientColor={item.gradientColor}
              content={item.content}
            />
          ))}
        </div>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
          onClick={handleNext}
        >
          →
        </button>
      </div>

      {/* Analyst Estimates Section */}
      <div className="mt-6">
        <h3 className="text-md font-semibold text-gray-800 mb-4">Analyst Estimates</h3>
        <div className="flex">
        <div className="flex items-center justify-center mr-10">
        <div className="w-24 h-24 opacity-60  bg-green-500  text-white flex items-center justify-center rounded-full text-lg font-semibold">
              76%
            </div>
        </div>
            <div className="flex flex-col w-[50vw] gap-4">
          {/* Buy */}
          <div className="flex items-center gap-4">
            
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800">Buy</h4>
              <div className="h-2 bg-gray-300 rounded-full mt-1">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "76%" }}></div>
              </div>
            </div>
          </div>

          {/* Hold */}
          <div className="flex items-center gap-4">
            
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800">Hold</h4>
              <div className="h-2 bg-gray-300 rounded-full mt-1">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "8%" }}></div>
              </div>
            </div>
          </div>

          {/* Sell */}
          <div className="flex items-center gap-4">
           
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800">Sell</h4>
              <div className="h-2 bg-gray-300 rounded-full mt-1">
                <div className="h-full bg-red-500 rounded-full" style={{ width: "16%" }}></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SentimentSection;
