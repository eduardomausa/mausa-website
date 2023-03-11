import styles from "./styles.module.scss";
import { Sun, Moon } from "react-feather";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux-hooks";
import { toggled } from "../../redux/slices/theme-mode/theme-mode-slice";
import Link from "next/link";
import Menu from "../Menu";
import HamburguerMenu from "../HamburguerMenu";

export default function Header() {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const dispatch = useAppDispatch();

  function handleChangeTheme() {
    dispatch(toggled());
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.content}>
        <HamburguerMenu />
        <h1 className={styles.title}>
          <Link href="/">Eduardo Mausa</Link>
        </h1>
        <Menu />
        <div className={styles.changeThemeContainer}>
          <button
            className={styles.changeThemeButton}
            onClick={handleChangeTheme}
          >
            {themeMode === "dark" ? (
              <Sun size={24} color="#FFF" />
            ) : (
              <Moon size={24} color="#000" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
