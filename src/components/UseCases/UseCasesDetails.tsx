import React from "react";
import TitleParagraph from "./Details/titleParagraph"; // your component
import { cards } from "./UseCasesGrid/GridCards";
import styles from "./UseCasesDetails.module.css";

interface UseCaseDetailsProps {
  slug: string;
}

const UseCaseDetails: React.FC<UseCaseDetailsProps> = ({ slug }) => {
  const card = cards.find((c) => c.slug === slug);

  if (!card) {
    return <div>Use case not found</div>;
  }

  // Make sure detailTitles and detailParagraphs have the same length
  const detailsCount = Math.min(
    card.detailTitles.length,
    card.detailParagraphs.length
  );

  return (
    <div
      style={{
        padding: "150px 90px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "400",
          color: "#002B49",
          textAlign: "left",
          marginBottom: "50px",
        }}
      >
        {card.title}
      </h1>
      {/* Hashtag buttons */}
      <div
        style={{
          display: "flex",
          gap: "35px",
        }}
      >
        <img
          src={card.imagedetailsrc}
          style={{ width: "60%", marginBottom: "50px" }}
        />
        <div>
          {card.hashtags.map((tag) => (
            <button className={styles.UCtag} key={tag}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Render multiple TitleParagraph components based on detail arrays */}
      {Array.from({ length: detailsCount }).map((_, index) => (
        <TitleParagraph
          key={index}
          title={card.detailTitles[index]}
          paragraph={card.detailParagraphs[index]}
        />
      ))}
    </div>
  );
};

export default UseCaseDetails;
