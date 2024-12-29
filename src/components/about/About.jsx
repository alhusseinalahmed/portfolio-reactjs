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
                React, Vue, and Angular. I have a strong understanding of
                responsive design principles and have experience working with
                popular CSS frameworks like Bootstrap and Tailwind CSS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am a backend developer with a focus on building robust and
                scalable server-side applications. My expertise lies in
                languages like Java, Python, and Node.js, as well as frameworks
                such as Spring Boot and Express.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="uiIcon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I am a UI designer with a passion for creating visually stunning
                and user-friendly interfaces. My expertise lies in tools such as
                Adobe XD, Figma, and Sketch, along with a strong understanding
                of design principles and user experience design.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
