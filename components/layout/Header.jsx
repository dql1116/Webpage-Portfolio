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
        const sections = TABS
            .map(({ id }) => document.getElementById(id))
            .filter((el) => el instanceof Element);
        if (!sections.length) return;

        const cb = (entries) => {
            const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (visible?.target?.id) setActive(visible.target.id);
        };

        let observer;
        const build = () => {
            if (observer) observer.disconnect();
            const thr = window.innerWidth <= 768 ? 0.12 : 0.55; // tweak mobile threshold
            observer = new IntersectionObserver(cb, { threshold: thr });
            sections.forEach((el) => observer.observe(el));
        };

        build();
        const rebuild = () => build();
        window.addEventListener('resize', rebuild, { passive: true });
        window.addEventListener('orientationchange', rebuild, { passive: true });

        return () => {
            observer?.disconnect();
            window.removeEventListener('resize', rebuild);
            window.removeEventListener('orientationchange', rebuild);
        };
    }, []);
    
    const handleClick = (id) => (e) => {
        e.preventDefault();
        const target = document.getElementById(id);
        const header = document.querySelector(`.${styles.body}`);

        if (target) {
            const headerHeight = header ? header.offsetHeight : 0;
            const visualOffset = header
            ? Math.abs(parseInt(getComputedStyle(header).top, 10) || 0)  // 50 or 25
            : 0;

            const y = target.getBoundingClientRect().top + window.scrollY - headerHeight + visualOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
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