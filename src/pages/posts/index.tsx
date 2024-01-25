import { GetStaticProps } from "next";
import styles from "./styles.module.scss";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getSortedPostsData } from "../../utils/posts";

type PostProps = {
  allPostsData: [{
    id: string;
    title: string;
    date: string;
  }]
};

export default function Posts({ allPostsData }: PostProps) {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.posts}>
          {allPostsData.length <= 0 ? (
            <div>
              <p>Work in progress</p>
            </div>
          ) : null}
          {allPostsData?.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <time>{post.date}</time>
              <strong>{post.title}</strong>
            </Link>
          ))}{" "}
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  
  return {
    props: {
      allPostsData,
    },
  };
};
