import styles from "../../styles/pages/home.module.css";
import { designProjects, pastProjects } from "../content/projects";
import ProjectCards from "./ProjectCards";

export default function PastProjectsSection() {
  return (
    <section className={styles.section} aria-labelledby="past-projects">
      <h2 className={styles.sectionTitle} id="past-projects">
        Past projects
      </h2>
      <p className={styles.sectionText}>
        A few older things I&apos;ve built and learned from.
      </p>

      <ProjectCards projects={pastProjects} />

      <div className={styles.pastDesign}>
        <h3 className={styles.subsectionTitle}>Design</h3>
        <ProjectCards projects={designProjects} variant="design" />
      </div>
    </section>
  );
}
