import { Avatar } from "../Avatar";
import { Contacts } from "../Contacts";
import styles from "./styles.module.scss";

export function HomeDescription() {
  return (
    <div className={styles.homeDescriptionContainer}>
      <Avatar />
      <h1 className={styles.title}>Eduardo Mausa</h1>
      <p className={styles.description}>
        Frontend software developer and Philosophy graduate.
      </p>
      <Contacts />
    </div>
  );
}
