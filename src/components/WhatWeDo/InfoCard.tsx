import React from "react";
import "./WhatWeDoSection.css";

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
    <div className="WWDCard">
      <div className="WWDCardHeader">
        <h2>{title}</h2>
        <img loading="lazy" src={iconSrc} alt={`${title} InfoCardicon`} />
      </div>
      <p>{content}</p>
    </div>
  );
};
