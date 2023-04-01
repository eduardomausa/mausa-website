import styles from "./styles.module.scss";
import Menu from "../Menu";
import HamburguerMenu from "../HamburguerMenu";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <HamburguerMenu />
        <h1 className={styles.title}>Eduardo Mausa</h1>
        <Menu />
      </div>
    </header>
  );
}
