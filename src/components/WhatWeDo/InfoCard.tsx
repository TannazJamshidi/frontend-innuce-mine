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
    <div className="InfoCardcolumn">
      <div className="InfoCardcard">
        <div className="InfoCardheader">
          <div className="InfoCardtitleWrapper">
            <div className="InfoCardour">Our</div>
            <div className="InfoCardtitle">{title}</div>
          </div>
          <img
            loading="lazy"
            src={iconSrc}
            className="InfoCardicon"
            alt={`${title} InfoCardicon`}
          />
        </div>
        <div className="InfoCardcontent">{content}</div>
      </div>
    </div>
  );
};
