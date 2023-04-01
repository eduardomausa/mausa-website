import styles from "./styles.module.scss";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Menu />
      </div>
    </header>
  );
}
