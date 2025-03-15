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
        <h1>inNuCE Lab</h1>
        <h2>
          The Neuromorphic Computing Research Infrastructure @ Politecnico di
          Torino
        </h2>
        <p>
          Bring your brain-inspired projects to life with our own Cloud-Based
          <b> Neuromorphic Prototyping Platform</b>. Know more about our
          <b> software tools</b>, discover our <b> development services</b> or
          just take a look at our <b>use cases</b>.
        </p>
        <div className="buttons">
          <button onClick={() => {}} tabIndex={0}>
            KNOW MORE
          </button>
          <button onClick={() => {}} tabIndex={0}>
            FOLLOW US
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
