import React from "react";
import "./HeroSection.css";
import video from "../../assets/videoHome.mp4";

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <video
        src={video}
        className="videoHome"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="herocontainer">
        <h1 className="herotitle">
          Hybrid HPC
          <br />
          Where Innovation Meets High Performance
        </h1>
        <p className="herodescription">
          Neuromorphic computing, as explored at InNuce Lab, is a groundbreaking
          approach that emulates the human brain's structure and functionality
          to revolutionize computing systems. By integrating brain-inspired
          neural architectures, InNuce Lab focuses on developing
          energy-efficient, real-time processing solutions for advanced AI,
          robotics, and edge computing applications.
        </p>
        <button
          className="heroexploreButton"
          onClick={() => {}}
          tabIndex={0}
          aria-label="Explore our updates"
        >
          EXPLORE OUR UPDATES
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
