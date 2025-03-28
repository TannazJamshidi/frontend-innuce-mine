import React from "react";
import "./InfraHeader.css";
import infographic from "../../../assets/infographic.svg";

const InfraHeader: React.FC = () => {
  return (
    <section className="InfraHeader">
      <div className="Infracontainer">
        <h1 className="Infratitle">
          Your Neuromorphic
          <br />
          Prototyping Platform
        </h1>
        <p className="Infradescription">
          InNuce labs offer a complete , easy to use Prototyping Platform for
          all Neuromorphic needs.
          <br />
          from the development ,with the most updated and innovative tools and
          libraries, to the development, done on the most popular and
          cutting-edge hardware.
          <br />
          <b>
            Just bring your own idea : the computer power, the tools and the
            hardware is on us.
          </b>
          <br />
        </p>
        <button
          className="LaunchButton"
          onClick={() => {}}
          tabIndex={0}
          aria-label="Launch App"
        >
          Launch App
        </button>
        <button
          className="DiscoverButton"
          onClick={() => {}}
          tabIndex={0}
          aria-label="Discover Our Services"
        >
          Discover Our Services
        </button>
      </div>
      <div className="animationInfra">
        <img src={infographic} alt="" />
      </div>
    </section>
  );
};

export default InfraHeader;
