import PrismicDOM from "prismic-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPrismiscClient } from "@/services/prismic/prismic";
import styles from "./styles.module.scss";

interface PostProps {
  params: {
    slug: string;
  };
}

interface Post {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
}

async function getPost(slug: string): Promise<Post> {
  const prismic = getPrismiscClient();
  const response = await prismic.getByUID("post", slug, {});

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
  const post = await getPost(params.slug);

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
