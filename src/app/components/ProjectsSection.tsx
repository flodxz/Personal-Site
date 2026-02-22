import styles from "../../styles/pages/home.module.css";
import { currentProjects } from "../content/projects";
import ProjectCards from "./ProjectCards";

export default function ProjectsSection() {
  return (
    <section
      className={`${styles.section} ${styles.currentProjects}`}
      aria-labelledby="current-projects"
    >
      <h2 className={styles.sectionTitle} id="current-projects">
        Projects I&apos;m working on
      </h2>
      <ProjectCards projects={currentProjects} />
    </section>
  );
}
