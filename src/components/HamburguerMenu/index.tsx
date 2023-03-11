import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Menu, X as Close } from "react-feather";
import { useAppSelector } from "../../redux/hooks/redux-hooks";
import Link from "next/link";

export default function HamburguerMenu() {
  // const themeMode = useAppSelector((state) => state.themeMode.value);
  const [isOpen, setIsOpen] = useState(false);

  function toggleHamburguerMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.hamburguerMenu}>
      <button
        className={styles.hamburguerMenuButton}
        onClick={toggleHamburguerMenu}
      >
        {isOpen ? <Close color="#FFF" /> : <Menu color="#FFF" />}
      </button>
      {isOpen ? (
        <nav className={styles.hamburgerMenuNavigation}>
          <Link href="/about">Sobre mim</Link>
          <Link href="/">Currículo</Link>
        </nav>
      ) : null}
    </div>
  );
}
