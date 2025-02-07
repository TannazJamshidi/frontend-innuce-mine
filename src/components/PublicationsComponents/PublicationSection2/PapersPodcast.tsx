import React from "react";
import PaperList from "./PaperList";
import CallToActionPodcast from "./CallToActionPodcast";
import "./PapersPodcast.css";

const PapersPodcast: React.FC = () => {
  const handleStartPodcast = () => {
    console.log("Starting podcast generation");
  };

  return (
    <div className="papers-view">
      <div className="papers-content">
        <PaperList />
      </div>
      <CallToActionPodcast
        message="Would you like to have a podcast of your selected publications? Check the papers and press start button"
        buttonText="START"
        onAction={handleStartPodcast}
      />
    </div>
  );
};

export default PapersPodcast;
