import React from "react";
import "./InfraToolCard.css";
import { ToolCardProps } from "./types";
import { useNavigate } from "react-router-dom";

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  iconSRC,
}) => {
  return (
    <div className="toolCard">
      <img className="toolIcon" src={iconSRC} />
      <h2 className="toolTitle">{title}</h2>
      <p className="toolDes">{description}</p>
    </div>
  );
};
