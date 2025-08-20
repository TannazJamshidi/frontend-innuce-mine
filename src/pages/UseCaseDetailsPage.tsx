import { useParams } from "react-router-dom";
import UseCasesDetails from "../components/UseCases/UseCasesDetails";

const UseCaseDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Slug not found</div>;
  }

  return <UseCasesDetails slug={slug} />;
};

export default UseCaseDetailsPage;
