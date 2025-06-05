import React from "react";
import "./SupportedHW.css";
import { ToolCard } from "../InfrastructureTools/InfaToolCard";
import { ToolCardProps } from "../InfrastructureTools/types";
import HW1 from "../../../assets/HW1.svg";
import HW2 from "../../../assets/HW2.svg";
import HW3 from "../../../assets/HW3.svg";

const hardwareData: ToolCardProps[] = [
  {
    title: "SPINNAKER2",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  himenaeos s..",
    link: "",
    iconSRC: HW1,
  },
  {
    title: "SPATIAL REGISTRATION",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  himenaeos s..",
    link: "",
    iconSRC: HW2,
  },
  {
    title: "SPINNAKER2",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  himenaeos s..",
    link: "",
    iconSRC: HW3,
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
