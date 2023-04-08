import styles from "./styles.module.scss";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2 className={styles.logo}>Mausa</h2>
        <Menu />
      </div>
    </header>
  );
}
