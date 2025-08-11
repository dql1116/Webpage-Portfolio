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
            <h2 className={styles.description}>I am a fourth year Computer Science major. During my free time I like to play games and hangout with friends. I especially love playing and watching soccer.</h2>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.touchButton}>Get In Touch</button>
            <button className={styles.cvButton}>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}