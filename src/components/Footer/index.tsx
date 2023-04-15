import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <div className={styles.copyrightTitleContainer}>
          <p className={styles.copyrightText}>
            All rights reserved &#169; Eduardo Mausa 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
