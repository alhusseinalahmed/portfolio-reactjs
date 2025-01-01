import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.projectContainer} key={id}>
              <img
                className={styles.projectImage}
                src={getImageUrl(project.imageSrc)}
                alt={project.title}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul className={styles.projectSkills}>
                {project.skills.map((skill, id) => {
                  return (
                    <li className={styles.projectSkill} key={id}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div className={styles.projectLinks}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  href={project.demo}
                >
                  Demo
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  href={project.repo}
                >
                  Repo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
