'use client';

import styles from './Header.module.css';
import { useEffect, useState } from 'react';

const TABS = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects'},
]

export default function Header(){
    const [active, setActive] = useState('about');

    useEffect(() => {
        const sectionEls = TABS
            .map(({ id }) => document.getElementById(id))
            .filter((el) => el instanceof Element);

        if (!sectionEls.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible && visible.target && visible.target.id) {
                setActive(visible.target.id);
                }
            },
            { threshold: 0.55 }
        );
        sectionEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleClick = (id) => (e) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(id);
        }
    };

    return (
        <header className={styles.body}>
            <nav className={styles.header}>
                {TABS.map(({ id, label}) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={handleClick(id)}
                        className={`${styles.headerTab} ${active === id ? styles.active : ''}`}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    )
}