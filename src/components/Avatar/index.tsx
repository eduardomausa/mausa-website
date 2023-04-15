import styles from "./styles.module.scss";
import Image from "next/image";
import photo from "../../assets/avatar.jpg";

export default function Avatar() {
  return (
    <div className={styles.avatarContainer}>
      <Image
        className={styles.image}
        src={photo}
        alt="Eduardo Mausa avatar"
        width={240}
        height={240}
      />
    </div>
  );
}
