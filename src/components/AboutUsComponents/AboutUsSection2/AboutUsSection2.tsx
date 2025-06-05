import React from "react";
import { NeuromorphicItem } from "./AboutUsItem";
import "./AboutUsSection2.css";
import Cicon from "../../../assets/corner-right-down.svg";
import S2image from "../../../assets/AboutUsS2Icon.jpg";

const neuromorphicData = [
  {
    icon: Cicon,
    title: "OUR MISSION",
    description:
      " is to bridge the gap between neuroscience and technology, fostering breakthroughs in cognitive computing, robotics, and adaptive systems.  ",
  },
  {
    icon: Cicon,
    title: "OUR AIM",
    description:
      "we aim to create transformative applications in areas such as autonomous systems, health monitoring, and smart environments.",
  },
  {
    icon: Cicon,
    title: "OUR LOCATION",
    description:
      "Algorithms and software: Developing tools and models for neuromorphic computing, addressing challenges in edge computing, robotics, and autonomous systems.",
  },
];

export const NeuromorphicSection: React.FC = () => {
  return (
    <div className="AboutusS2content">
      {neuromorphicData.map((item, index) => (
        <NeuromorphicItem
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
