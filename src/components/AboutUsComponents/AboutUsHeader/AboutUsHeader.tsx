import * as React from "react";
import "./AboutUsHeader.css";

const AboutUsHeader: React.FC = () => {
  return (
    <div className="AboutUsheader">
      <h1 className="AboutUstitle">ABOUT US</h1>
      <p className="AboutUsdescription">
        InNUCE is composed of a multidisciplinary team, including tenured
        professors, postdoctoral researchers, PhD students, and research
        assistants. Our research spans three main areas.
      </p>
    </div>
  );
};

export default AboutUsHeader;
