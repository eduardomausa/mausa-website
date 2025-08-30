import styles from "./styles.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getPost } from "@/services/prismic/getPost";

interface PostProps {
  params?: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostProps) {
  const resolvedParams = await params;
  if (!resolvedParams || !resolvedParams.slug) {
    throw new Error("Missing slug param for post page");
  }
  const post = await getPost(resolvedParams.slug);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
