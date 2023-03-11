import { useAppSelector } from "../../redux/hooks/redux-hooks";
import styles from './styles.module.scss'

export default function Footer() {
  // const themeMode = useAppSelector((state) => state.themeMode.value);

  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <div className={styles.copyrightTitleContainer}>
          <p className={styles.copyrightText}>Todos os direitos reservados</p>
        </div>
        <div className={styles.copyrightTextContainer}>
          <p className={styles.copyrightText}>&#169; Eduardo Mausa 2023</p>
        </div>
      </div>
    </footer>
  );
}
