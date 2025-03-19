import * as React from "react";
import "./Footer.css";
import HF from "../../assets/huggingface.svg";
import GitHub from "../../assets/github.svg";
import ld from "../../assets/linkdin.svg";
import s1 from "../../assets/supporter1.png";
import s2 from "../../assets/supporter2.png";
import s3 from "../../assets/supporter3.png";
import s4 from "../../assets/supporter4.png";
import s5 from "../../assets/supporter5.png";
import s6 from "../../assets/supporter6.png";
import inNuCe from "../../assets/inNuceWhite.svg";

const FooterContent: React.FC = () => {
  return (
    <div className="footerall">
      <div className="footerContent">
        <img className="inNuCEFooter" loading="lazy" src={inNuCe} />
        <div className="footerLineV" />
        <div className="footerCol">
          <a href="/">HOME</a>
          <a href="/infrastructures">SERVICES</a>
          <a href="/research">RESEARCH</a>
          <a href="/aboutus">ABOUT US</a>
          <a href="/credits">CREDITS</a>
        </div>

        <div className="footerCol">
          <div>FOLLOW US </div>
          {/* <a href="">
            <img
              loading="lazy"
              src={ld}
              className="socialMediaIcon"
              alt="linkdin"
            />
          </a> */}

          <a href="https://github.com/neuromorphic-polito">
            <img
              loading="lazy"
              src={GitHub}
              className="socialMediaIcon"
              alt="GitHub"
            />
          </a>

          <a href="https://huggingface.co/neuromorphic-polito">
            <img
              loading="lazy"
              src={HF}
              className="socialMediaIcon"
              alt="huggingface"
            />
          </a>
        </div>
        <div className="footerCol">
          ADDRESS :<br />
          Corso Duca degli Abruzzi, 24, 10129 Torino TO, Italy
          <br />
          <br />
          EMAIL ADDRESS :<br />
          innuce@polito.it
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="footerLineH" />
      <div className="supporters">
        <img className="S" src={s4} alt="" />
        <img className="S" src={s2} alt="" />
        <img className="S" src={s5} alt="" />
        <img className="S" src={s1} alt="" />
        <img className="S" src={s3} alt="" />
        <img className="S" src={s6} alt="" />
      </div>
    </div>
  );
};

export default FooterContent;
