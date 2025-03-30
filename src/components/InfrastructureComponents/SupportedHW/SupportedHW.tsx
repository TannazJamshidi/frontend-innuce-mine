import React from "react";
import "./SupportedHW.css";
import { ToolCard } from "../InfrastructureTools/InfaToolCard";
import { ToolCardProps } from "../InfrastructureTools/types";

const hardwareData: ToolCardProps[] = [
  {
    title: "HW",
    description: "short description",
    link: "",
    longDescription: "",
    keywords: "keyword1,keyword2,keyword3",
    flippable: false,
  },
  {
    title: "HW",
    description: "short description",
    link: "",
    longDescription: "",
    keywords: "keyword1,keyword2,keyword3",
    flippable: false,
  },
];

export const SupportedHardware: React.FC = () => {
  return (
    <div className="HWcontainer">
      <h1>SUPPORTED HARDWARE</h1>
      <div className="HWcardGrid">
        {hardwareData.map((tool, index) => (
          <div key={index}>
            <ToolCard {...tool} />
          </div>
        ))}
      </div>
    </div>
  );
};
