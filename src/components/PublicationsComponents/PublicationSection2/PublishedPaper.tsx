import React, { useState } from "react";
import "./PublishedPaper.css";
import PodcastBar from "./PodcastBar"; // Import MusicBar component
import pdIcon from "../../../assets/play-circle.svg";

interface PublishedPaperProps {
  title: string;
  keywords: string;
  openPaperText: string;
  simplifyText: string;
  onOpenPaper: () => void;
  onSimplify: () => void;
}

const PublishedPaper: React.FC<PublishedPaperProps> = ({
  title,
  keywords,
  openPaperText,
  simplifyText,
  onOpenPaper,
  onSimplify,
}) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusicBar = () => {
    setIsMusicPlaying((prev) => !prev);
  };

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
          className={`podcast-button ${isMusicPlaying ? "active" : ""}`}
          onClick={toggleMusicBar}
        >
          <img src={pdIcon} alt="" />
        </button>
        <button className="button-open-paper" onClick={onOpenPaper}>
          {openPaperText}
        </button>
        <button className="button-simplify" onClick={onSimplify}>
          {simplifyText}
        </button>
      </div>
      {isMusicPlaying && <PodcastBar />} {/* Show music bar when playing */}
    </div>
  );
};

export default PublishedPaper;
