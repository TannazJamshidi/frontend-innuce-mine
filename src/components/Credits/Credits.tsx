"use client";
import styles from "./Credits.module.css";

function Credits() {
  return (
    <section className={styles.creditsContainer}>
      <h2 className={styles.mainHeading}>
        This website was built with the help of the following tools and
        resources :
      </h2>

      <div className={styles.spacer} />

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Visual Assets:</h3>
        <ul className={styles.itemList}>
          <li className={styles.listItem}>icons provided by flaticon.com</li>
          <li className={styles.listItem}>wordart.com</li>
          <li className={styles.listItem}>freepik.com</li>
        </ul>
      </section>

      <div className={styles.spacer} />

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Frameworks and Libraries:</h3>
        <ul className={styles.itemList}>
          <li className={styles.listItem}>React</li>
          <li className={styles.listItem}>Figma</li>
          <li className={styles.listItem}>tsparticle</li>
          <li className={styles.listItem}>builder.io</li>
        </ul>
      </section>

      <div className={styles.spacer} />

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Font:</h3>
        <p className={styles.fontInfo}>poppins</p>
      </section>
    </section>
  );
}

export default Credits;
