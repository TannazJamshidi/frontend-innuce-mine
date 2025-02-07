import InfraHeader from "../components/InfrastructureComponents/InfraHeader/InfraHeader";
import { Tools } from "../components/InfrastructureComponents/InfrastructureTools/InfraTools";
import { SupportedHardware } from "../components/InfrastructureComponents/SupportedHW/SupportedHW";
import FooterContent from "../components/Footer/FooterContent";

function Infrastructures() {
  return (
    <>
      <InfraHeader></InfraHeader>
      <Tools></Tools>
      <SupportedHardware></SupportedHardware>
      <FooterContent></FooterContent>
    </>
  );
}

export default Infrastructures;
