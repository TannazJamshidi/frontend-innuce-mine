import React from "react";
import "./UseCases.css";
import UseCaseCard from "./UseCaseCard";

const useCasesData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4be23af3e50db93ebd68d3d14d0a98d8b22c94ca362fd22e3b758db6e5b598ea?apiKey=fedf28294640492c8068aacb6f1c1bf6&",
    altText: "Brain simulation visualization",
    title:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    tags: "#IoT#BrainSimulation",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ef5f6d931ccfbf960bbcb9e1b6c29aed059288715b70da822f214877997f7aeb?apiKey=fedf28294640492c8068aacb6f1c1bf6&",
    altText: "Neuromorphic hardware visualization",
    title:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    tags: "#IoT#NeuromorphicHardWare",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b76b5b79f44afb94b4b14d7c01cb6487f76f2901ee4b02ab065da4b2e61e4601?apiKey=fedf28294640492c8068aacb6f1c1bf6&",
    altText: "Bioinformatics visualization",
    title:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    tags: "#BioInformatics#BrainSimulation",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0f52e8ac697d6b1c52e17e2a15681a1269eeb4cfb49d7b2df9aeac05ace771e4?apiKey=fedf28294640492c8068aacb6f1c1bf6&",
    altText: "Brain simulation concept",
    title:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    tags: "#IoT#BrainSimulation",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0ac7527f1cf12eb5d5e3df33a7dca2c18769a3cde40ca661e0e8168d481731fc?apiKey=fedf28294640492c8068aacb6f1c1bf6&",
    altText: "Neural network visualization",
    title:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    tags: "#IoT#SNNs",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/16b2bcab03156841dd2e45a14075a6b8eb873b22f3befa634b9c3cb9b5923112?apiKey=fedf28294640492c8068aacb6f1c1bf6&",
    altText: "Circuit board visualization",
    title:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    tags: "#IoT#BrainSimulation",
  },
];

const UseCases: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap"
        rel="stylesheet"
      />
      <div className="UseCasecontainer">
        <p className="UseCaseheaderText">
          Our neuromorphic infrastructure supports a wide range of innovative
          projects, each designed to push the boundaries of AI, bioinformatics,
          and brain simulation. Below are several use cases, including
          student-driven projects, Brainchip pipelines, and applications like
          Sudoku-solving algorithms.
        </p>
        <div className="UseCasegrid">
          {useCasesData.map((useCase, index) => (
            <UseCaseCard
              key={index}
              image={useCase.image}
              altText={useCase.altText}
              title={useCase.title}
              tags={useCase.tags}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UseCases;
