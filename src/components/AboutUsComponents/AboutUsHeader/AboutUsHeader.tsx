import * as React from "react";
import "./AboutUsHeader.css";
import usPic from "../../../assets/usPic.png";

const AboutUsHeader: React.FC = () => {
  return (
    <div className="AboutUsheader">
      <img src={usPic} alt="" />
      <div className="AboutUsContent">
        <h1>
          ABOUT <span style={{ color: "#F48124" }}>U</span>
          <span style={{ color: "#D40000" }}>S</span>
        </h1>
        <p>
          We are a research team at <b> EDA Group, Politecnico di Torino,</b>{" "}
          developing cutting-edge solutions in neuromorphic computing, AIoT, and
          bioinformatics. Our work bridges hardware and software to enable
          intelligent, efficient, and scalable systems .
        </p>
      </div>
    </div>
  );
};

export default AboutUsHeader;
