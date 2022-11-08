import React from 'react';
import styles from './about.module.scss';

export default function About() {
  return (
    <main className={styles.contentContainer}>
      <h1>About me</h1>
      <section className={styles.sectionContent}>
        <p>I'm a software developer living in Brazil. My journey in the tech industry started back in my high school</p>
      </section>
    </main>
  );
}