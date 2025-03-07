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

const FooterContent: React.FC = () => {
  return (
    <div className="footerall">
      <div className="footerContent">
        <div className="footerCol">
          <a href="/">HOME</a>
          <a href="/Infrastructures">SERVICES</a>
          <a href="/AboutUs">ABOUT US</a>
          <a href="/Publications">PUBLICATIONS</a>
          <a href="/ContactUs">CONTACT US</a>
          <a href="/news">NEWS</a>
        </div>

        <div className="footerCol">
          MANAGING DIRECTORS :<br />
          Corem ipsum <br />
          dolor sit
        </div>
        <div className="footerCol">
          <div>FOLLOW US </div>
          <a href="https://linkdin.com">
            <img
              loading="lazy"
              src={ld}
              className="socialMediaIcon"
              alt="linkdin"
            />
          </a>

          <a href="https://github.com">
            <img
              loading="lazy"
              src={GitHub}
              className="socialMediaIcon"
              alt="GitHub"
            />
          </a>

          <a href="https://huggingface.com">
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
          Corso Castelfidardo, 34/d, 10138 Torino TO, Italy
          <br />
          EMAIL ADDRESS :<br />
          innuce@poito.it
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="footerLine" />
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
