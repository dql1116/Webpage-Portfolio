import Image from 'next/image';
import styles from './intro.module.css';

export default function Intro() {
  return (
    <section className={styles.body}>
      <div className={styles.mainContainer}>
        <img
          src="/images/David.jpeg"
          className={styles.profileImg}
          width={450}
          height={450}
          alt="introImg"
        />
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <h1 className={styles.title}>Hello, my name is David Lee</h1>
            <h2 className={styles.description}>
              I am a fourth-year Computer Science student at the University of California, Davis.
              I'm currently working on front-end development and growing into full stack development.
              I love building user-focused products-let's connect.
            </h2>
          </div>
          <div className={styles.actionButtons}>
            <a 
              href="mailto:dqlee@ucdavis.edu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.touchButton}
            >
              Get In Touch
            </a>
            <a 
              href="/cv/David_Lee_Resume.pdf"
              target="_blank"
              rel="noopener"
              className={styles.cvButton}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}