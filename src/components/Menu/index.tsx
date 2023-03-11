import Link from "next/link";
import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/about">Sobre mim</Link>
      <Link href="/resume">Currículo</Link>
    </nav>
  );
}
