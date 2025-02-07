import React from "react";
import "./PublishedPaper.css";
import vectorTick from "../../../assets/VectorTick.svg";

interface PublishedPaperProps {
  title: string;
  keywords: string;
  openPaperText: string;
  simplifyText: string;
  onOpenPaper: () => void;
  onSimplify: () => void;
  onCheck: () => void;
  isChecked: boolean;
}

const PublishedPaper: React.FC<PublishedPaperProps> = ({
  title,
  keywords,
  openPaperText,
  simplifyText,
  onOpenPaper,
  onSimplify,
  onCheck,
  isChecked,
}) => {
  return (
    <div className="paper-container" role="article">
      <div className="paper-info">
        <h2 className="paper-title">{title}</h2>
        <div className="paper-keywords">
          <span className="keywords-label">Keywords:</span> {keywords}
        </div>
      </div>
      <div className="paper-actions">
        <button
          className={`check ${isChecked ? "checked" : ""}`}
          onClick={onCheck}
          aria-label={isChecked ? "Uncheck paper" : "Check paper"}
        >
          <img loading="lazy" src={vectorTick} alt="" className="img-icon" />
        </button>
        <button className="button-open-paper" onClick={onOpenPaper}>
          {openPaperText}
        </button>
        <button className="button-simplify" onClick={onSimplify}>
          {simplifyText}
        </button>
      </div>
    </div>
  );
};

export default PublishedPaper;
