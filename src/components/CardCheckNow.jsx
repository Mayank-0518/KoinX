import React from "react";

const CardCheckNow = ({ image, title, buttonText, gradientColor }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md flex flex-col items-start justify-between`}
      style={{ background: gradientColor }}
    >
      <img src={image} alt="Card Visual" className="w-full h-32 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-100">
        {buttonText} →
      </button>
    </div>
  );
};

export default CardCheckNow;
