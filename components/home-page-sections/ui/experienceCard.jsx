import Image from 'next/image';
import styles from './experienceCard.module.css';

export default function Experience({ title, date, logo, description }) {
  return (
    <card className={styles.card}>
        <header className={styles.header}>
            <img 
                src={logo}
                alt="Company Logo"
                className={styles.iconImage}
            />
            <div className={styles.titleDate}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.date}>{date}</p>
            </div>       
        </header>
        <p className={styles.description}>{description}</p>
    </card>
  );
}