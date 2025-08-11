'use client'

import Image from 'next/image';
import styles from './intro.module.css';
import { useEffect, useState } from 'react';

export default function Intro() {
  const fullTitle = "Hello, my name is David Lee";
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, index + 1));
      index++;
      if (index === fullTitle.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className={styles.body}>
      <div className={styles.mainContainer}>
        <Image
          src="/images/David.png"
          className={styles.profileImg}
          width={450}
          height={450}
          alt="introImg"
        />
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <h1 className={styles.title}>{typedTitle}</h1>
            <h2 className={styles.description}>
              I am a fourth-year Computer Science student at the University of California, Davis.
              I'm currently working on front-end development and growing into full stack development.
              I love building user-focused products-let's connect.
            </h2>
          </div>
          <div className={styles.actionButtons}>
            <a 
              href="mailto:davidqlee03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.touchButton}
            >
              Get In Touch
            </a>
            <a 
              href="/cv/David-Lee-Resume.pdf"
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