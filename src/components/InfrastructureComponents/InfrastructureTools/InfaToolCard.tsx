import React from "react";
import "./InfraToolCard.css";
import { ToolCardProps } from "./types";

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  longDescription,
  keywords,
  flippable,
}) => {
  return (
    <div className={`toolCard ${flippable ? "flippable" : ""}`}>
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <h2 className="toolTitle">{title}</h2>
          <p className="toolShortDes">{description}</p>
          <p className="toolKeywords">{keywords}</p>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <p className="toolLongDes">{longDescription}</p>
        </div>
      </div>
    </div>
  );
};
