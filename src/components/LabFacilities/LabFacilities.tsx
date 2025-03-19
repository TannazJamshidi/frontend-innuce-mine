import React from "react";
import "./LabFacilities.css";
import { FacilityCard } from "./FacilityCard";
import { LabFacilitiesProps } from "./types";
import { DEFAULT_FACILITIES } from "./constants";

export const LabFacilities: React.FC<LabFacilitiesProps> = () => {
  return (
    <div className="Facilitycontainer" aria-label="Lab Facilities">
      <h1>LAB FACILITIES</h1>
      <div className="FacilitycardGrid">
        {
          DEFAULT_FACILITIES.map((facility, _) => (
            <div key={facility.title}>
              <FacilityCard
                key={facility.title}
                title={facility.title}
                description={facility.description}
                boldKeywords={facility.boldKeywords}
                iconSRC={facility.iconSRC}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};
