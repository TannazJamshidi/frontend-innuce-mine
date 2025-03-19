import React, { useMemo } from "react";
import "./HeroSection.css";
import { BACKGROUND } from "./constants";
import Particles from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";

const HeroSection: React.FC = () => {

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => (BACKGROUND),
    [],
  );

  return (
    <section className="hero">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className="herocontainer">
        <h1>inNuCE Lab</h1>
        <h2>
          The Neuromorphic Computing Research Infrastructure @ Politecnico di
          Torino
        </h2>
        <p>
          Bring your brain-inspired projects to life with our own Cloud-Based
          <b> Neuromorphic Prototyping Platform</b>.<br></br> Know more about
          our
          <b> software tools</b>, discover our <b> development services</b> or
          just take a look at our <b>use cases</b>.
        </p>
        <div className="buttons">
          <button onClick={() => { }} tabIndex={0}>
            KNOW MORE
          </button>
          <button onClick={() => { }} tabIndex={0}>
            FOLLOW US
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
