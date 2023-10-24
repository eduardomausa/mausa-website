import Avatar from "../Avatar";
import Contacts from "../Contacts";
import styles from "./styles.module.scss";

export default function HomeDescription() {
  return (
    <div className={styles.homeDescriptionContainer}>
      <div className={styles.infoContainer}>
        <Avatar />
        <h1 className={styles.title}>eduardo mausa</h1>
        <p className={styles.description}>
          💻 &nbsp; software engineer <br />
          📚 &nbsp; philosophy graduate
        </p>
      </div>
    </div>
  );
}
