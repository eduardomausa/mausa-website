import styles from "./styles.module.scss";
import { Instagram, Twitter, GitHub } from "react-feather";
import Link from "next/link";

export function Contacts() {
  return (
    <div className={styles.contactsContainer}>
      <Link href="https://www.instagram.com/eduardomausa/">
        <Instagram width={32} height={32} />
      </Link>
      <Link href="https://twitter.com/eduardomausa">
        <Twitter width={32} height={32} />
      </Link>
      <Link href="https://github.com/eduardomausa/">
        <GitHub width={32} height={32} />
      </Link>
    </div>
  );
}
