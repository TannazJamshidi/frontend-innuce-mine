import React from "react";
import { InfoCard } from "./InfoCard";
import "./WhatWeDoSection.css";
import missionIcon from "../../assets/mission.gif";
import aimIcon from "../../assets/aim.gif";
import locationIcon from "../../assets/location.gif";

export const WhatWeDoSection: React.FC = () => {
  return (
    <div className="WWDdiv">
      <div className="whatWeDo">WHAT WE DO</div>
      <div className="WWDdescription">
        The InNUCE Lab is dedicated to advancing research in neuromorphic
        computing and artificial intelligence. We focus on developing innovative
        hardware and software systems that mimic neural networks, enabling
        efficient, low-power solutions for complex computational tasks.
      </div>
      <div className="WWDcardsContainer">
        <div className="WWDcardsGrid">
          <InfoCard
            title="MISSION"
            iconSrc={missionIcon}
            content="is to bridge the gap between neuroscience and technology, fostering breakthroughs in cognitive computing, robotics, and adaptive systems."
          />
          <InfoCard
            title="AIM"
            iconSrc={aimIcon}
            content="we aim to create transformative applications in areas such as autonomous systems, health monitoring, and smart environments."
          />
          <InfoCard
            title="LOCATION"
            iconSrc={locationIcon}
            content="InNUCE is located within the DAUIN Department (Department of Control and Computer Engineering) at the Politecnico di Torino, in Turin, Italy."
          />
        </div>
      </div>
    </div>
  );
};
