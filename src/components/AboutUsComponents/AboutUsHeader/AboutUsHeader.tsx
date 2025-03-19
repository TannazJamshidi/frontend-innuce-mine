import * as React from "react";
import "./AboutUsHeader.css";

const AboutUsHeader: React.FC = () => {
  return (
    <div className="AboutUsheader">
      <div className="AboutUsContent">
        <h1 className="AboutUstitle">ABOUT US</h1>
        <p className="AboutUsDes">
          We are a research team at <b> EDA Group, Politecnico di Torino,</b>{" "}
          developing cutting-edge solutions in neuromorphic computing, AIoT, and
          bioinformatics. Our work bridges hardware and software to enable
          intelligent, efficient, and scalable systems.
        </p>
      </div>
    </div>
  );
};

export default AboutUsHeader;
