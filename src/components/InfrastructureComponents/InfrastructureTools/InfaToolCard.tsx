import React from "react";
import "./InfraTools.css";
import { ToolCardProps } from "./types";

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="toolCard">
      <h2 className="toolTitle">{title}</h2>
      <p className="toolDescription">{description}</p>
      <div className="buttonGp">
        <a href={link} className="Icons">
          GitHub
        </a>
        <a href={link} className="Icons">
          Hugging Face
        </a>
      </div>
    </div>
  );
};
