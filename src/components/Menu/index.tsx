import Link from "next/link";
import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
