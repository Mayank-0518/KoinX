import React from "react";
import tk from "../assets/tokenomics.png"

const Tokenomics = () => {
  return (
    <div className="p-6 bg-gray-50">
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tokenomics</h2>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Initial Distribution</h3>

     <img src={tk} alt="" />

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus
      </p>
    </div>
  );
};

export default Tokenomics;
