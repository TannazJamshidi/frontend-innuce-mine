import React, { useRef, useState, useEffect } from "react";
import "./PodcastBar.css";
import pauseIcon from "../../../assets/pause.svg";
import playIcon from "../../../assets/play.svg";
import audio from "../../../assets/audio.mp3";

const PodcastBar: React.FC = () => {
  const audioRef = useRef(new Audio(audio)); // Replace with your actual audio file path
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current.duration) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle user clicking on the progress bar
  const handleProgressBarClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.nativeEvent.offsetX;
    const newProgress = (clickPosition / progressBar.offsetWidth) * 100;
    setProgress(newProgress);
    audioRef.current.currentTime =
      (newProgress / 100) * audioRef.current.duration;
  };

  return (
    <div className="podcast-bar">
      {/* Progress Bar */}
      <div className="progress-container" onClick={handleProgressBarClick}>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Podcast Controls with Custom SVG Icons */}
      <div className="podcast-controls">
        <img
          src={isPlaying ? pauseIcon : playIcon}
          className="iconP-button"
          onClick={togglePlayPause}
          alt="Play/Pause button"
        />
      </div>
    </div>
  );
};

export default PodcastBar;
