'use client'

import Image from 'next/image';
import styles from './projects.module.css';
import Card from './ui/projectCard';

export default function Experience() {
  const projects1 = [
    {
        id: "kangacode-icon",
        img: "/images/kangacode.png",
        color: "rgba(255, 255, 255, 1)",
        link: "https://kangacode.ai/",
        title: "KangaCode",
        description: "Web App"
    },
    {
        id: "journally-icon",
        color: "rgba(141, 148, 254, 1)",
        // color: "rgba(255, 255, 255, 1)",
        img: "/images/journally.png",
        // img: "/images/github.png",
        link: "https://github.com/JueWang268/journally",
        title: "Journally",
        description: "Web App"
    }
  ]

  const projects2 = [
    {
        id: "best-buddies-icon",
        color: "rgba(143, 209, 197, 1)",
        img: "/images/bestbuddies.png",
        link: "https://ucdbestbuddies.org/",
        title: "BestBest Buddies - UC Davis Chapter (New Members Page)",
        description: "Web App"
    },
    {
        id: "dungeon-adventure-icon",
        img: "/images/github.png",
        color: "rgba(255, 255, 255, 1)",
        link: "https://github.com/dql1116/Dungeon-Adventure",
        title: "Dungeon Adventure",
        description: "Godot Game"
    }
  ]

  return (
    <section className={styles.body}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>My Work</h1>
        <div className={styles.projectContainer}>
            <div className={styles.cardContainer}>
                {projects1.map((proj) => (
                    <Card
                        key={proj.id}
                        title={proj.title}
                        description={proj.description}
                        img={proj.img}
                        color={proj.color}
                        link={proj.link}
                    />
                ))}
            </div>
            <div className={styles.cardContainer}>
                {projects2.map((proj) => (
                    <Card
                        key={proj.id}
                        title={proj.title}
                        description={proj.description}
                        img={proj.img}
                        color={proj.color}
                        link={proj.link}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}