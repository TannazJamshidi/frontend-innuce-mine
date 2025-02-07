import React from "react";
import "./SupportedHW.css";
import { HardwareCardProps } from "./types";

export const HardwareCard: React.FC<HardwareCardProps> = ({
  title,
  description,
  onLearnMore,
}) => {
  return (
    <div className="cardContainer">
      <h2 className="cardTitle">{title}</h2>
      <p className="cardDescription">{description}</p>
      <button
        className="learnMoreButton"
        onClick={onLearnMore}
        aria-label={`Learn more about ${title}`}
      >
        Learn more
      </button>
    </div>
  );
};
