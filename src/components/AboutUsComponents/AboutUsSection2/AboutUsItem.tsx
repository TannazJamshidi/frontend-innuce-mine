import React from "react";
import { NeuromorphicItemProps } from "./types";
import "./AboutUsSection2.css";

export const NeuromorphicItem: React.FC<NeuromorphicItemProps> = ({
  icon,
  description,
}) => {
  return (
    <div className="itemContainer">
      <img loading="lazy" src={icon} alt="" className="itemicon" />
      <div className="itemdescription">{description}</div>
    </div>
  );
};
