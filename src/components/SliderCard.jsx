import React from "react";

const SliderCard = ({ gradientColor, content }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-sm`}
      style={{ background: gradientColor }}
    >
      <h3 className="text-md font-semibold text-gray-800">
        {content.title}
      </h3>
      <p className="text-sm text-gray-600 mt-2">{content.description}</p>
    </div>
  );
};

export default SliderCard;
