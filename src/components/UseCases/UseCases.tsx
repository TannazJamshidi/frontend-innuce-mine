import React from "react";
import "./UseCases.css";
import { ToolCard } from "../../components/InfrastructureComponents/InfrastructureTools/InfaToolCard";

const useCasesData = [
  {
    title: "Use Case",
    description: "Short description",
    link: "",
    longDescription: "This is the long description of Use Case.",
    keywords: "keyword1,keyword2,keyword3",
    flippable: true,
  },
  {
    title: "Use Case 2",
    description: "Short description",
    link: "",
    longDescription: "This is the long description of Use Case 2.",
    keywords: "keyword1,keyword2,keyword3",
    flippable: true,
  },
  {
    title: "Use Case 3",
    description: "Short description",
    link: "",
    longDescription: "This is the long description of Use Case 3.",
    keywords: "keyword1,keyword2,keyword3",
    flippable: true,
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="Usecases">
      <div className="UseCasecontainer">
        <h1>USE CASES</h1>
        <div className="UseCasegrid">
          {useCasesData.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
