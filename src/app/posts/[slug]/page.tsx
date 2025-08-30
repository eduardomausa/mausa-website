import PrismicDOM from "prismic-dom";
import { getPrismiscClient } from "@/services/prismic/prismic";
import styles from "./styles.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface PostProps {
  params?: Promise<{ slug: string }>;
}

interface Post {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
}

export async function getPost(slug: string): Promise<Post> {
  const prismic = getPrismiscClient();
  const response = await prismic.getByUID("post", slug);

  return {
    slug,
    title: response.data.title,
    content: PrismicDOM.RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      },
    ),
  };
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
