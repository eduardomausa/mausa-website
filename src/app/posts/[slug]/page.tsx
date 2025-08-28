import { GetServerSideProps } from "next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PrismicDOM from "prismic-dom";
import styles from "./post.module.scss";
import { ParsedUrlQuery } from "querystring";
import { getPrismiscClient } from "../../services/prismic/prismic";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
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
  const { slug } = params as Params;
  const prismic = getPrismiscClient(req);
  const response = await prismic.getByUID("post", String(slug), {});

  const post = {
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

  return {
    props: {
      post,
    },
  };
};
