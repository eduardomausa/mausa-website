import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Menu, X as Close } from "react-feather";
import Link from "next/link";

export default function HamburguerMenu() {
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
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      ) : null}
    </div>
  );
}
