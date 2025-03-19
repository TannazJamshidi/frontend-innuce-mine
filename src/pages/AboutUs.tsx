import AboutUsHeader from "../components/AboutUsComponents/AboutUsHeader/AboutUsHeader";
import { NeuromorphicSection } from "../components/AboutUsComponents/AboutUsSection2/AboutUsSection2";
import MeetTeam from "../components/AboutUsComponents/MeetTeam/MeetTeam";
import FooterContent from "../components/Footer/FooterContent";

function AboutUs() {
  return (
    <div>
      <AboutUsHeader></AboutUsHeader>
      <NeuromorphicSection></NeuromorphicSection>
      <MeetTeam></MeetTeam>
    </div>
  );
}

export default AboutUs;
