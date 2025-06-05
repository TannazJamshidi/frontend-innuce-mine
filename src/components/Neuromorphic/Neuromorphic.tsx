import "./Neuromorphic.css";
import { TEXT } from "./constants";
import quoteBorder from "../../assets/quoteBorder.svg";
function Neuromorphic() {
  return (
    <section className="Neu-background-section">
      <article className="citation">
        <img src={quoteBorder} alt="" />
        <p>
          At inNuCE Lab, we strive to showcase the potential of neuromorphic
          computing technologies. That's why we've partnered with the
          EBRAINS-Italy project—to make these solutions easily accessible to all
          developers through our dedicated Heterogeneous Prototyping Platform.
        </p>
      </article>
    </section>
  );
}

export default Neuromorphic;
