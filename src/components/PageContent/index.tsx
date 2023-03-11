import { ReactElement } from "react";
import styles from "./styles.module.scss";

interface PageContentProps {
  children: ReactElement;
}

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className={styles.pageContent}>
      <section className={styles.pageContentSection}>{children}</section>
    </div>
  );
}
