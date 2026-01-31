import Image from "next/image";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <Image
              className={styles.heroBanner}
              src="/flod-banner.png"
              alt="Flod"
              width={4338}
              height={4050}
              sizes="(max-width: 768px) 80vw, 420px"
              priority
            />
            <h1 className={styles.heroTitle}>Hello, I&apos;m Jonas</h1>
            <p className={styles.heroSubtitle}>
              Developer, designer, and builder of digital experiences
            </p>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionText}>
            I&apos;m a passionate developer focused on creating elegant solutions to complex problems.
            With expertise in web development and a keen eye for design, I bring ideas to life
            through clean, efficient code.
          </p>
        </section>

        <section id="work" className={styles.section}>
          <h2 className={styles.sectionTitle}>Selected Work</h2>
          <div className={styles.projects}>
            <div className={styles.projectCard}>
              <h3>Project One</h3>
              <p>A brief description of an interesting project I&apos;ve worked on.</p>
            </div>
            <div className={styles.projectCard}>
              <h3>Project Two</h3>
              <p>Another project showcasing my skills and expertise.</p>
            </div>
            <div className={styles.projectCard}>
              <h3>Project Three</h3>
              <p>More amazing work that demonstrates my capabilities.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerText}>Powered by Calypso Inc.</span>
          <Image
            className={styles.calypsoLogo}
            src="/calypso-logo.png"
            alt=""
            width={28}
            height={28}
          />
        </div>
      </footer>
    </div>
  );
}
