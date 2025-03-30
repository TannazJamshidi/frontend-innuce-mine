import React from "react";
import { NeuromorphicItemProps } from "./types";
import "./AboutUsSection2.css";

export const NeuromorphicItem: React.FC<NeuromorphicItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="itemContainer">
      <img loading="lazy" src={icon} alt="" style={{ width: "35px" }} />
      <div className="itemdescription">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
