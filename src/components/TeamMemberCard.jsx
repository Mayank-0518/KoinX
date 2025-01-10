import React from "react";

const TeamMemberCard = ({ image, name, designation, description }) => {
  return (
    <div className="flex bg-blue-100 p-4 shadow rounded-lg items-start mb-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-cover rounded-full mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-blue-600 mb-2">{designation}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
