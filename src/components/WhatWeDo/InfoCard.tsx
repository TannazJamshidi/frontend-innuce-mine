import React from "react";
import "./InfoCard.css";

interface InfoCardProps {
  title: string;
  iconSrc: string;
  content: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  iconSrc,
  content,
}) => {
  return (
    <div className="column">
      <div className="card">
        <div className="header">
          <div className="titleWrapper">
            <div className="our">Our</div>
            <div className="title">{title}</div>
          </div>
          <img
            loading="lazy"
            src={iconSrc}
            className="icon"
            alt={`${title} icon`}
          />
        </div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};
