import "../UseCases/UsecaseHeader.css";
import React, { useMemo } from "react";
import Particles from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { BACKGROUND } from "./constantUc";

const UsecasesHeader = () => {
  const options: ISourceOptions = useMemo(() => BACKGROUND, []);

  return (
    <section className="UsecasesHeader">
      <div className="UcHeaderContainer">
        <h1>Discover our Use Cases</h1>
        <h3>
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
        </h3>
        <button onClick={() => {}} tabIndex={0} aria-label="Discover Use Cases">
          Discover Use Cases
        </button>
      </div>

      <Particles className="particleUc" options={options} />
    </section>
  );
};

export default UsecasesHeader;
