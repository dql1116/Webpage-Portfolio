'use client'

import Link from 'next/link';
import Image from 'next/image';
import styles from './projectCard.module.css';

export default function Experience({ title, description, img, color, link }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
        <card className={styles.card}>
            <div className={styles.imageContainer} style={{ backgroundColor: color}}>
                <Image
                    src={img}
                    width={400}
                    height={400}
                    alt="Project Icon"
                    className={styles.projectImg}
                />
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.projectText}>{title}</p>
                <p className={styles.projectText}>{description}</p>
            </div>
        </card>
    </Link>
  );
}