import React from "react";
import "./InfraTools.css";
import { ToolCard } from "./InfaToolCard";
import { ToolCardProps } from "./types";

const toolsData: ToolCardProps[] = [
  {
    title: "Spikify",
    description:
      "forget about the conversation from raw input to spikes. We got you!",
    link: "",
  },
  {
    title: "Mouse Brain Atlas",
    description:
      "The Allen mouse brain atlas is a comprehensive digital resource that provides detail information on the structure and function of the mouse brain.",
    link: "",
  },
  {
    title: "Rat Brain Atlas",
    description:
      "The Waxholm Space rat brain is a detailed volumetric atlas of the rat brain ,to which a wide range of anatomical and functional data have been registered.",
    link: "",
  },
];

export const Tools: React.FC = () => {
  return (
    <section className="toolsSection">
      <div className="toolsContainer">
        <h1 className="toolsTitle">InNuce Tools</h1>
        <div className="toolsGrid">
          {toolsData.map((tool, index) => (
            <div key={index} className="toolColumn">
              <ToolCard {...tool} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
