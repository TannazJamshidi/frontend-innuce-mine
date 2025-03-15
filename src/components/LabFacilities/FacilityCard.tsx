import React from "react";
import "./LabFacilities.css";
import { FacilityCardProps } from "./types";

export const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  description,
  iconSRC,
}) => {
  return (
    <div className="facilityCard" role="article">
      <img src={iconSRC} alt="" />
      <div className="facilityCardDes">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
