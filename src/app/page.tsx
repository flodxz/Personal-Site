import Image from "next/image";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}></nav>
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
            <h1 className={styles.heroTitle}>Hello, I&apos;m Jonas 👋 </h1>
            <p className={styles.heroSubtitle}>
              I’m studying Industrial Engineering at the KUL in Ghent.<br></br>
              And I sometimes code in my free time.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Image
            className={styles.calypsoLogo}
            src="/calypso-logo.png"
            alt=""
            width={28}
            height={28}
          />
          <span className={styles.footerText}>Powered by Calypso Inc.</span>
        </div>
      </footer>
    </div>
  );
}
