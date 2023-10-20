import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <div className={styles.copyrightTitleContainer}>
          <p className={styles.copyrightText}>&#169; eduardo mausa 2023</p>
        </div>
      </div>
    </footer>
  );
}
