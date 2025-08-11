'use client'

import Image from 'next/image';
import styles from './experience.module.css';
import Card from './ui/experienceCard';

export default function Experience() {
  const experiences = [
    { 
      id: 'roulettech-2025',
      logo: "/logos/roulettech.svg",
      title: "Software Developer Intern at Roulettech, Inc.",
      date: "June 2025 - Present",
      description: "As a Software Developer Intern at Roulettech, I worked across various tasks for KangaCode, an AI educational game. Collaborating with developers and designers, I implemented UI components for KangaCode's pygame and translated Figma designs into responsive pages for KangCode's webpage."
    },
    {
      id: 'journally-2024',
      logo: "/logos/journally.svg",
      title: "Founding Technial Intern at Journally LLC",
      date: "October 2024 - May 2025",
      description: "During my time at Journally, I collaborated in small team of Co-Founders/CEOs and intern colleagues to build the MVP. I translated Figma designs into responsive pages and overall helped pivot the code-base from single-page-utility format to a full-fledged and scalable app."
    },
    {
      id: 'include-2023',
      logo: "/logos/include.svg",
      title: "Frontend Developer at #include",
      date: "November 2023 - March 2024",
      description: "At #include at Davis, I served as a Frontend Developer in a Cohort, working together to develop a website for a local client, Best Buddies-UC Davis Chapter. Focusing on responsiveness and user-experience, I implemented images, registration cards, hyperlinks, and embedded Youtube videos."
    }
  ]

  return (
    <section className={styles.body}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>Experience</h1>
        <div className={styles.listContainer}>
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              title={exp.title}
              date={exp.date}
              logo={exp.logo}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}