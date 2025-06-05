import React from "react";
import "./LabFacilities.css";
import { FacilityCardProps } from "./types";

export const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  description,
  boldKeywords,
  iconSRC,
}) => {
  const regex = new RegExp(
    `(${boldKeywords
      .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "gi"
  );
  return (
    <div className="facilityCard" role="article">
      <div className="facilityCardDes">
        <h2>{title}</h2>
        <p>
          {description
            .split(regex)
            .map((s) =>
              boldKeywords.includes(s) ? <strong>{s} </strong> : s + " "
            )}
        </p>
      </div>
      <img src={iconSRC} alt="" />
    </div>
  );
};
