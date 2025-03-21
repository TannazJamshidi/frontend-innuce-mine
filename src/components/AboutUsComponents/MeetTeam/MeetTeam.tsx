import React, { useState } from "react";
import Member from "./Member";
import "./MeetTeam.css";
import { members } from "./content";

const MeetTeam: React.FC = () => {


  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="teamSection">
      <h1>MEET OUR TEAMS</h1>
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
