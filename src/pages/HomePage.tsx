import HeroSection from "../components/HeroSection/HeroSection";
import { WhatWeDoSection } from "../components/WhatWeDo/WhatWeDoSection";
import Neuromorphic from "../components/Neuromorphic/Neuromorphic";
import { LabFacilities } from "../components/LabFacilities/LabFacilities";

function HomePage() {
  return (
    <>
      <HeroSection></HeroSection>
      <WhatWeDoSection></WhatWeDoSection>
      <Neuromorphic></Neuromorphic>
      <LabFacilities></LabFacilities>
    </>
  );
}

export default HomePage;
