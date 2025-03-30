import * as React from "react";
import "./AboutUsHeader.css";

const AboutUsHeader: React.FC = () => {
  return (
    <div className="AboutUsheader">
      <div className="AboutUsContent">
        <h5>ABOUT US</h5>
        <h3>
          We are a research team at <b> EDA Group, Politecnico di Torino,</b>{" "}
          developing cutting-edge solutions in neuromorphic computing, AIoT, and
          bioinformatics. Our work bridges hardware and software to enable
          intelligent, efficient, and scalable systems .
        </h3>
      </div>
    </div>
  );
};

export default AboutUsHeader;
