import React from "react";
import "./CallToActionPodcast.css";

interface CallToActionProps {
  message: string;
  buttonText: string;
  onAction: () => void;
}

const CallToActionPodcast: React.FC<CallToActionProps> = ({
  message,
  buttonText,
  onAction,
}) => {
  return (
    <div className="action-container">
      <div className="inner-container">
        <p className="message">{message}</p>
        <button
          className="action-button"
          onClick={onAction}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CallToActionPodcast;
