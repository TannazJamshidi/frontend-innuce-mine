import React from "react";
import "./SummaryAi.css";
import { SummaryAiSectionProps } from "./types";

export const SummaryAiSection: React.FC<SummaryAiSectionProps> = ({
  title,
  iconSrc,
  content,
  className,
}) => {
  return (
    <div className={`summarysection ${className || ""}`}>
      <div className="summaryheader">
        <div className="summarytitle">{title}</div>
        <img loading="lazy" src={iconSrc} alt="" className="summaryicon" />
      </div>
      <div className="summarycontent">
        {content}
        <br />
      </div>
    </div>
  );
};
