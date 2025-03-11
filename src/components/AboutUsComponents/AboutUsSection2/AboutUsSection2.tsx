import React from "react";
import { NeuromorphicItem } from "./AboutUsItem";
import "./AboutUsSection2.css";
import Cicon from "../../../assets/corner-right-down.svg";
import S2image from "../../../assets/AboutUsS2Icon.jpg";

const neuromorphicData = [
  {
    icon: Cicon,
    description:
      "Neuromorphic hardware: Designing energy-efficient, brain-inspired computing systems, including spiking neural networks (SNNs) and custom AI accelerators.",
  },
  {
    icon: Cicon,
    description:
      "Applications: Applying neuromorphic principles to smart sensing, bio-signal processing, and cognitive IoT for smarter cities and adaptive technologies.",
  },
  {
    icon: Cicon,
    description:
      "Algorithms and software: Developing tools and models for neuromorphic computing, addressing challenges in edge computing, robotics, and autonomous systems.",
  },
];

export const NeuromorphicSection: React.FC = () => {
  return (
    <div className="AboutusS2container">
      <img
        loading="lazy"
        src={S2image}
        alt="Neuromorphic computing visualization"
        className="AboutusS2mainImage"
      />

      <div className="AboutusS2content">
        {neuromorphicData.map((item, index) => (
          <NeuromorphicItem
            key={index}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
