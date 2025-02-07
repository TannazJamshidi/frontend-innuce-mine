import React from "react";
import "./LabFacilities.css";
import { FacilityCardProps } from "./types";

export const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="facilityCard" role="article">
      <h2 className="FcardTitle">{title}</h2>
      <p className="FcardDescription">{description}</p>
    </div>
  );
};
