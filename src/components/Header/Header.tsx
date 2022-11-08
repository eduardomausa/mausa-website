import Link from 'next/link';
import React from 'react';
import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          <Link href='/'>Mausa blog</Link>
      </h1>
      <nav className={styles.navContainer}>
        <Link className={styles.styledLink} href='/'>Home</Link>
        <Link className={styles.styledLink} href='/posts'>Posts</Link>
        <Link className={styles.styledLink} href='/about'>About</Link>
      </nav>

      <div className={styles.buttonContainer}>
        <button className={styles.button}></button>
        <button className={styles.button}></button>
      </div>
    </div>
    </div >
  );
}