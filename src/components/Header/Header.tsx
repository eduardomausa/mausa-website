import Link from "next/link";
import styles from "./styles.module.scss";
import Menu from "../Menu/Menu";

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
