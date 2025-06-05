import React from "react";
import "./InfraTools.css";
import { ToolCard } from "./InfaToolCard";
import { ToolCardProps } from "./types";
import tool1 from "../../../assets/tool1.svg";
import tool2 from "../../../assets/tool2.svg";
import tool3 from "../../../assets/tool3.svg";

const toolsData: ToolCardProps[] = [
  {
    title: "SPIKIFY",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  himenaeos s..",
    link: "",
    iconSRC: tool1,
  },

  {
    title: "MOUSE BRAIN ATLAS",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  himenaeos s..",
    link: "",
    iconSRC: tool2,
  },
  {
    title: "RAT BRAIN ATLAS",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  himenaeos s..",
    link: "",
    iconSRC: tool3,
  },
];

export const Tools: React.FC = () => {
  return (
    <div className="toolsContainer">
      <h1>inNuCE TOOLS</h1>
      <div className="toolsGrid">
        {toolsData.map((tool, index) => (
          <div key={index}>
            <ToolCard {...tool} />
          </div>
        ))}
      </div>
    </div>
  );
};
