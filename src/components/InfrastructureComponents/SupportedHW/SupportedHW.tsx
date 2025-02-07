import React from "react";
import "./SupportedHW.css";
import { HardwareCard } from "./card";
import { SupportedHardwareData } from "./types";

const hardwareData: SupportedHardwareData[] = [
  {
    title: "SpiNNaker 2.",
    description:
      "SpiNNaker 2 is the latest product from the University of ___ and the company SpiNNcloud.It allows to run the vast majority of Neuromorphic applications.",
  },
  {
    title: "QuickNll",
    description:
      "Spatial registration of serial microscopic brain images to three-dimentional refrence atlases with the QuickNll tool. PLosONE ,2019, 14(5): e0216796.https://doi.org/10.1371/journal.pone.0216796",
  },
];

export const SupportedHardware: React.FC = () => {
  const handleLearnMore = (title: string) => {
    console.log(`Learn more about ${title}`);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="heading">Supported Hardware</h1>
        <div className="cardGrid">
          {hardwareData.map((hardware, index) => (
            <div key={index} className="cardWrapper">
              <HardwareCard
                title={hardware.title}
                description={hardware.description}
                onLearnMore={() => handleLearnMore(hardware.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
