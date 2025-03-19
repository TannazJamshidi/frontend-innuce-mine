import React from "react";
import { InfoCard } from "./InfoCard";
import "./WhatWeDoSection.css";
import infoImg1 from "../../assets/brainImg.svg";
import infoImg2 from "../../assets/infoImg2.svg";
import infoImg3 from "../../assets/infoImg3.svg";

export const WhatWeDoSection: React.FC = () => {
  return (
    <div className="WWDContainer">
      <h1>OUR APPLICATION DOMAINS</h1>

      <div className="WWDcardsGrid">
        <InfoCard
          title="Neuromorphic"
          iconSrc={infoImg1}
          content="The emerging technology inspired by the biological brain that accelerates and enhances AI applications"
        />
        <InfoCard
          title="AIoT"
          iconSrc={infoImg2}
          content="Where sensors and microcontrollers meet AI to improve cities, industries and even your house"
        />
        <InfoCard
          title="Bioinformatics"
          iconSrc={infoImg3}
          content="Combining biology, computer science, and mathematics to analyze biological data,  genomics and proteomics."
        />
      </div>
    </div>
  );
};
