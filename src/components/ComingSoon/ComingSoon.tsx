import  { useMemo } from "react";
import Particles from "@tsparticles/react";
import {  type ISourceOptions } from "@tsparticles/engine";
import { BACKGROUND } from "./constant";
import "./ComingSoon.css";

const ComingSoon = () => {
  const options: ISourceOptions = useMemo(() => BACKGROUND, []);

  return (
    <section className="heroCS">
      <Particles options={options} />
      <h1>COMING SOON ...</h1>
    </section>
  );
};

export default ComingSoon;
