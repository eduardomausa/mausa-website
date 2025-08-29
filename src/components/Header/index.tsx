import Link from "next/link";
import Menu from "../Menu";
import styles from "./styles.module.scss";

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
