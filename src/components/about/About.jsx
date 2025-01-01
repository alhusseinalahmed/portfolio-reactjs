import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="about"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with a passion for creating
                user-friendly and visually appealing interfaces. My expertise
                lies in HTML, CSS, and JavaScript, along with frameworks such as
                React, Svlete. I have a strong understanding of responsive
                design principles and have experience working with popular CSS
                frameworks like Tailwind CSS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/java.png")} alt="serverIcon" />
            <div className={styles.aboutItemText}>
              <h3>Java Developer</h3>
              <p>
                I am a java developer with a passion for creating robust and
                efficient server-side applications. My expertise lies in Java,
                Spring Boot, and MySQL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/unity.png")} alt="uiIcon" />
            <div className={styles.aboutItemText}>
              <h3>Game Developer</h3>
              <p>
                I am a game developer with a passion for creating interactive
                and visually appealing games. My expertise lies in Unity and C#.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
