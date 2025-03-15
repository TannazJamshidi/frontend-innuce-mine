import React from "react";
import "./LabFacilities.css";
import { FacilityCard } from "./FacilityCard";
import { LabFacilitiesProps } from "./types";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";

const defaultFacilities = [
  {
    title: "Heterogeneous Prototyping Platform",
    description:
      "Prototype your applications in the cloud with cutting-edge Neuromorphic HW/SW solutions. From concept to deployment, with a platform designed for all skill levels, from AI enthusiasts to neuromorphic ninjas.",
    iconSRC: icon1,
  },
  {
    title: "Neuromorphic Software Modules",
    description:
      "Benefit from our set of software tools for all of your spiking needs. From spike encoding of floating point data, to SNN inference on microcontrollers, going through innovative spiking network architectures: we got you covered.",
    iconSRC: icon3,
  },
  {
    title: "Neuromorphic App support service",
    description:
      "Need external hardware, sensors, or expert advice? Our team is ready to assist you! Contact us to explore our range of Event Cameras, microcontrollers, MEMS, and FPGAs.",
    iconSRC: icon2,
  },

  {
    title: "Neuromorphic Use Cases",
    description:
      "Curious about our technologies or in the need for inspiration? Explore our gallery of use cases, from Human Activity Recognition to GPS localization, and discover what is possible!",
    iconSRC: icon4,
  },
];

export const LabFacilities: React.FC<LabFacilitiesProps> = ({
  facilities = defaultFacilities,
}) => {
  return (
    <div className="Facilitycontainer" aria-label="Lab Facilities">
      <h1>LAB FACILITIES</h1>
      <div className="FacilitycardGrid">
        {facilities.map((facility, index) => (
          <div key={facility.title}>
            <FacilityCard
              title={facility.title}
              description={facility.description}
              iconSRC={facility.iconSRC}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
