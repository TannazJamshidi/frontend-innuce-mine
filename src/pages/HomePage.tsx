import HeroSection from "../components/HeroSection/HeroSection";
import { WhatWeDoSection } from "../components/WhatWeDo/WhatWeDoSection";

import Neuromorphic from "../components/Neuromorphic/Neuromorphic";
import { LabFacilities } from "../components/LabFacilities/LabFacilities";
import FooterContent from "../components/Footer/FooterContent";

function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection></WhatWeDoSection>
      <Neuromorphic></Neuromorphic>
      <LabFacilities></LabFacilities>
      <FooterContent></FooterContent>
    </>
  );
}

export default HomePage;
