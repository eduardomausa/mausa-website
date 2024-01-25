import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./post.module.scss";
import { getAllPostIds, getPostData } from "../../utils/posts";

type PostProps = {
  post: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  }
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.date}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          ></div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }:any) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
