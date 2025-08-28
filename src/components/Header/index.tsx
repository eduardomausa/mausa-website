import Menu from "../Menu";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <p className={styles.logo}>{`</>`}</p>
        </Link>

        <Menu />
      </div>
    </header>
  );
}
