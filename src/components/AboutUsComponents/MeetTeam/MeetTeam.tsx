import React, { useState } from "react";
import Member from "./Member";
import "./MeetTeam.css";
import memberProf from "../../../assets/memberProf.svg";

const MeetTeam: React.FC = () => {
  const members = [
    {
      imgSrc: memberProf,
      name: "Jane Doe",
      role: "HEAD OF DESIGN",
      description:
        "Jane is passionate about creating user-centered designs. She has over 10 years of experience in graphic and product design, helping companies establish a strong visual identity.",
      linkedInUrl: "https://www.linkedin.com/in/jane-doe",
    },
    {
      imgSrc: memberProf,
      name: "Jane Doe",
      role: "HEAD OF DESIGN",
      description:
        "Jane is passionate about creating user-centered designs. She has over 10 years of experience in graphic and product design, helping companies establish a strong visual identity.",
      linkedInUrl: "https://www.linkedin.com/in/jane-doe",
    },
    {
      imgSrc: memberProf,
      name: "John Smith",
      role: "CTO",
      description:
        "John leads the technology department with a focus on innovation and scalability. With expertise in cloud computing and AI, he ensures the company stays ahead in the tech space.",
      linkedInUrl: "https://www.linkedin.com/in/john-smith",
    },
    {
      imgSrc: memberProf,
      name: "Alice Brown",
      role: "MARKETING LEAD",
      description:
        "Alice specializes in digital marketing strategies and customer engagement. She has a track record of driving brand growth through creative campaigns.",
      linkedInUrl: "https://www.linkedin.com/in/alice-brown",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="teamSection">
      <div className="Teamtitle">MEET OUR TEAMS</div>
      <div className="members">
        {members.map((member, index) => (
          <Member
            key={index}
            imgSrc={member.imgSrc}
            name={member.name}
            role={member.role}
            description={member.description}
            linkedInUrl={member.linkedInUrl}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
