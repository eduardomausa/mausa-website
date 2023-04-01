import { GetServerSideProps } from "next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getPrismiscClient } from "../../services/prismic";
import * as prismicR from "@prismicio/richtext";
import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
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
          ></div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const client = getPrismiscClient(req);
  const { slug } = params;

  const response = await client.getByUID("post", slug, {});

  const post = {
    slug,
    title: response.data.title,
    content: prismicR.asText(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      },
    ),
  };

  return {
    props: {
      post,
    },
  };
};
