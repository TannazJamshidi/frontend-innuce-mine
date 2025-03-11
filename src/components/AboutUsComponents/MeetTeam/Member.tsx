import React from "react";
import "./MeetTeam.css";

interface MemberProps {
  imgSrc: string;
  name: string;
  role: string;
  description: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  linkedInUrl: string;
}

const Member: React.FC<MemberProps> = ({
  imgSrc,
  name,
  role,
  description,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  linkedInUrl,
}) => {
  return (
    <div
      className="memberCard"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={imgSrc} alt={`Photo of ${name}`} className="memberImage" />
      <div className="memberInfo">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      {isHovered && (
        <div className="memberDescription">
          <p className="descriptionText">{description}</p>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedinButton"
          >
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
};

export default Member;
