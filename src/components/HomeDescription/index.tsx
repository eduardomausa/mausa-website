import Avatar from "../Avatar";
import Contacts from "../Contacts";
import styles from "./styles.module.scss";

export default function HomeDescription() {
  return (
    <div className={styles.homeDescriptionContainer}>
      <div className={styles.infoContainer}>
        <Avatar />
        <h1 className={styles.title}>Eduardo Mausa</h1>
        <p className={styles.description}>
          Desenvolvedor Frontend e Bacharel em Filosofia.
        </p>
        <Contacts />
      </div>
    </div>
  );
}
