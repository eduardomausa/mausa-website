import styles from "./styles.module.scss";
import { Instagram, Twitter, GitHub, Linkedin } from "react-feather";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className={styles.contactsContainer}>
      <Link
        href="https://www.linkedin.com/in/eduardo-mausa"
        data-testid="linkedin-link"
      >
        <Linkedin width={32} height={32} data-testid="linkedin-icon" />
      </Link>
      <Link href="https://github.com/eduardomausa/" data-testid="github-link">
        <GitHub width={32} height={32} data-testid="github-icon" />
      </Link>

      <Link href="https://twitter.com/eduardomausa" data-testid="twitter-link">
        <Twitter width={32} height={32} data-testid="twitter-icon" />
      </Link>
      <Link
        href="https://www.instagram.com/eduardomausa/"
        data-testid="instagram-link"
      >
        <Instagram width={32} height={32} data-testid="instagram-icon" />
      </Link>
    </div>
  );
}
