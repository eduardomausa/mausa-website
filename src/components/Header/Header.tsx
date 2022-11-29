import Link from 'next/link';
import React, { useState } from 'react';
import styles from './header.module.scss';
import { Sun, Moon } from 'react-feather';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { toggled } from '../../redux/features/theme-mode/theme-mode-slice';

export function Header() {
  const themeMode = useAppSelector((state) => state.themeMode.value)
  const dispatch = useAppDispatch()

  function handleChangeTheme() {
    dispatch(toggled())
  }

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
            {themeMode === 'dark' ?
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