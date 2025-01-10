import React from "react";
import CardCheckNow from "./CardCheckNow";

const AboutBitcoin = () => {
  return (
    <div className="p-6 bg-gray-50">
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Bitcoin</h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">What is Bitcoin?</h3>
      <p className="text-sm text-gray-600 mb-6">
        Bitcoin's price today is <strong>US$16,951.82</strong>, with a 24-hour trading volume of 
        <strong> $19.14 B</strong>. BTC is <strong>+0.36%</strong> in the last 24 hours. 
        It is currently <strong>-7.70%</strong> from its 7-day all-time high of <strong>$18,366.66</strong>, 
        and <strong>3.40%</strong> from its 7-day all-time low of <strong>$16,394.75</strong>. 
        BTC has a circulating supply of <strong>19.24 M BTC</strong> and a max supply of <strong>21 M BTC</strong>.
      </p>

      {/* Additional Information Section */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra.
        Diam id et lectus urna et tellus aliquam dictum at. Vivamus diam suspendisse enim facilisi
        diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. 
        <br /><br />
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque
        auctor amet.
      </p>

      {/* Cards Section */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Already Holding Bitcoin?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <CardCheckNow
          image="https://via.placeholder.com/300x150.png"
          title="Calculate your Profits"
          buttonText="Check Now"
          gradientColor="linear-gradient(to right, #2D6EF4, #3DB9F8)"
        />
        <CardCheckNow
          image="https://via.placeholder.com/300x150.png"
          title="Calculate your tax liability"
          buttonText="Check Now"
          gradientColor="linear-gradient(to right, #F96D2C, #F9A23A)"
        />
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-600 leading-relaxed">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis
        dui ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum
        potenti iaculis lacinia congue ipsum.
      </p>
    </div>
  );
};

export default AboutBitcoin;
