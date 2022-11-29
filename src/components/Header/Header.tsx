import Link from 'next/link';
import React, { useState } from 'react';
import styles from './header.module.scss';
import { Sun, Moon } from 'react-feather';

export function Header() {
  const [isThemeDark, setIsThemeDark] = useState(true);

  function handleChangeTheme() {
    setIsThemeDark(!isThemeDark)
  }

  console.log(isThemeDark)

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

        <div className={styles.changeTheme}>
          <button onClick={handleChangeTheme}>
            {isThemeDark ?
              <Sun size={24} color="#FFF" />
              :
              <Moon size={24} color="#000" />
            }
          </button>
        </div>
      </div>
    </div >
  );
}