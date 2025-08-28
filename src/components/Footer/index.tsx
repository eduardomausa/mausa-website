import Contacts from "../Contacts";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <Contacts />
        <div className={styles.copyrightTitleContainer}>
          <p className={styles.copyrightText}>&#169; eduardo mausa 2025</p>
        </div>
      </div>
    </footer>
  );
}
