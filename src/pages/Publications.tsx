import PublicationHeader from "../components/PublicationsComponents/publicationHeader/PublicationHeader";
import PaperList from "../components/PublicationsComponents/PublicationSection2/PaperList";
import FooterContent from "../components/Footer/FooterContent";
import YearSelector from "../components/PublicationsComponents/PublicationYear/YearSelector";

function Publications() {
  return (
    <>
      <PublicationHeader></PublicationHeader>
      <YearSelector></YearSelector>
      <PaperList></PaperList>
      <FooterContent></FooterContent>
    </>
  );
}

export default Publications;
