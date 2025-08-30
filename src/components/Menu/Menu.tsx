import Link from "next/link";
import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/posts">posts</Link>
    </nav>
  );
}
