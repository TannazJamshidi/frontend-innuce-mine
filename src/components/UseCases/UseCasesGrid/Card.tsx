"use client";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  imagesrc: string;
  variant: "horizontal" | "vertical" | "square-with-image" | "square-no-image";
  onDiscoverMore?: () => void;
  hashtags: string[];
  slug: string;
}

function Card({
  title,
  description,
  imagesrc,
  variant,
  onDiscoverMore,
}: CardProps) {
  if (variant === "horizontal") {
    return (
      <article
        className={styles.horizontalCard}
        style={{
          backgroundImage: `url(${imagesrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.horizontalContent}>
          <h2>{title}</h2>
          <p>{description}</p>
          <button className={styles.UCbutton} onClick={onDiscoverMore}>
            Discover More
          </button>
        </div>
      </article>
    );
  }

  if (variant === "vertical") {
    return (
      <article
        className={styles.verticalCard}
        style={{
          backgroundImage: `url(${imagesrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.verticalContent}>
          <h2>{title}</h2>
          <p>{description}</p>
          {onDiscoverMore && (
            <button className={styles.UCbutton} onClick={onDiscoverMore}>
              Discover More
            </button>
          )}
        </div>
      </article>
    );
  }

  if (variant === "square-with-image") {
    return (
      <article className={styles.squareImageCard}>
        <img src={imagesrc} alt={title} />
      </article>
    );
  }

  if (variant === "square-no-image") {
    return (
      <article className={styles.squareTextCard}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={styles.UCbutton} onClick={onDiscoverMore}>
          Discover More
        </button>
      </article>
    );
  }

  return null;
}

export default Card;
