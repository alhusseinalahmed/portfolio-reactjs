import React from "react";
import education from "../../data/education.json";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h3 className={styles.title}>Education</h3>
      <div className={styles.content}>
        <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
              <li className={styles.educationItem} key={id}>
                <img
                  className={styles.educationImage}
                  src={getImageUrl(educationItem.imageSrc)}
                  alt="educationImage"
                />
                <h3 className={styles.educationTitle}>{educationItem.name}</h3>
                <p className={styles.educationType}>{educationItem.type}</p>
                <p className={styles.educationSchool}>
                  {educationItem.schoolName}
                </p>
                <p className={styles.educationLocation}>
                  {educationItem.location}
                </p>
                <p className={styles.educationDate}>
                  {educationItem.start_year} - {educationItem.end_year}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
