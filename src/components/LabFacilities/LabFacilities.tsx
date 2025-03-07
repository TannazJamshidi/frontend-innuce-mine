import React from "react";
import "./LabFacilities.css";
import { FacilityCard } from "./FacilityCard";
import { LabFacilitiesProps } from "./types";
import flashHor from "../../assets/flashHor.svg";

const defaultFacilities = [
  {
    title: "Advance Tools",
    description:
      "Welcome to our Neuromorphic Research Lab, where innovation drives exploration! Our cutting-edge facility features advanced tools for developing and testing neuromorphic chips, along with high-performance workstations for simulating and modeling neural networks.",
  },
  {
    title: "Powerful Software",
    description:
      "We provide a powerful software ecosystem tailored for neuromorphic computing, enabling real-time experiments, efficient programming, and large-scale data analysis. Our tools empower researchers to push the boundaries of computational neuroscience and machine learning.",
  },
  {
    title: "Collaborative Space",
    description:
      "Collaboration fuels our breakthroughs. With integrated spaces for biologists, engineers, and computer scientists, we support interdisciplinary innovation. From wet labs to prototyping stations, our lab is equipped to advance robotics, AI, and cognitive computing.",
  },
];

export const LabFacilities: React.FC<LabFacilitiesProps> = ({
  facilities = defaultFacilities,
}) => {
  return (
    <section className="Facilitycontainer" aria-label="Lab Facilities">
      <div className="Facilitywrapper">
        <header className="Facilityheader">LAB FACILITIES</header>
        <div className="FacilitycardGrid">
          {facilities.map((facility, index) => (
            <div key={facility.title} className="FacilitycardColumn">
              <FacilityCard
                title={facility.title}
                description={facility.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
