import React from "react";
import "./InfraTools.css";
import { ToolCard } from "./InfaToolCard";
import { ToolCardProps } from "./types";

const toolsData: ToolCardProps[] = [
  {
    title: "Tool",
    description: "short description",
    link: "",
    longDescription: "",
    keywords: "keyword1,keyword2,keyword3",
    flippable: false,
  },
  {
    title: "Tool",
    description: "short description",
    link: "",
    longDescription: "",
    keywords: "keyword1,keyword2,keyword3",
    flippable: false,
  },
  {
    title: "Tool",
    description: "short description",
    link: "",
    longDescription: "",
    keywords: "keyword1,keyword2,keyword3",
    flippable: false,
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
