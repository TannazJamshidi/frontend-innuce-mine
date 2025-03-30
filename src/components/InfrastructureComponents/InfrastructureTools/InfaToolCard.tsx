import React from "react";
import "./InfraToolCard.css";
import { ToolCardProps } from "./types";
import { useNavigate } from "react-router-dom";

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  longDescription,
  keywords,
  flippable,
}) => {
  const navigate = useNavigate();
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
          <button onClick={() => navigate("/usecasesdetails")}>
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};
