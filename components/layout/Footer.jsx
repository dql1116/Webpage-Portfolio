// import SCSS file as styles for this component
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <section className={styles.info}>
            <div className={styles.socialContainer}>
                <ul className={styles.socials}>
                    <li className={styles.icon}> 
                    <a href="https://www.linkedin.com/in/davidqlee/" target="_blank" rel="noopener noreferrer">
                        <img src={"/icons/linkedin2.svg"} alt={"linkedin-icon"} className={styles.iconImage}/>
                    </a>
                    </li>
                    <li className={styles.icon}>
                    <a href="https://github.com/dql1116" target="_blank" rel="noopener noreferrer">
                        <img src={"/icons/github-mark.svg"} alt={"github-icon"} className={styles.iconImage}/>
                    </a>
                    </li>
                    <li className={styles.icon}>
                    <a href="mailto:davidqlee03@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={"/icons/gmail2.svg"} alt={"gmail-icon"} className={styles.iconImage}/>
                    </a>
                    </li>
                </ul>
            </div>
            <p className={styles.madeBy}>Made by David Lee</p>
        </section>
    </footer>
  );
}