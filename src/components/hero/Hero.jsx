import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Al Hussein</h1>
        <p className={styles.description}>
          I am a developer with a passion for creating user-friendly and
          visually appealing applications, including web applications, fun video
          games and backend applications.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:alhusseinalahmed@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero img"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
