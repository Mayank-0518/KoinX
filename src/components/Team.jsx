import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  const teamMembers = [
    {
      image: "https://via.placeholder.com/150",
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Elena Williams",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id.",
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Team</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi
        integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          image={member.image}
          name={member.name}
          designation={member.designation}
          description={member.description}
        />
      ))}
    </div>
  );
};

export default Team;
