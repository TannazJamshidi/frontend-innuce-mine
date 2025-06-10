import React from "react";

interface TitleParagraphProps {
  title: string;
  paragraph: string;
}

const TitleParagraph: React.FC<TitleParagraphProps> = ({
  title,
  paragraph,
}) => {
  // Inline styles object
  const styles = {
    section: {
      marginBottom: "1.5rem",
      width: "60%",
      color: "#002B49",
    },
    title: {
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
    paragraph: {
      fontSize: "20px",
      fontWeight: 300,
      lineHeight: 1.4,
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.paragraph}>{paragraph}</p>
    </section>
  );
};

export default TitleParagraph;
