import { GetStaticProps } from "next";
import { getPrismiscClient } from "../../services/prismic/prismic";
import styles from "./styles.module.scss";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  console.log(posts);
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts?.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </Link>
          ))}{" "}
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismiscClient();

  const response = await client.getAllByType("post");

  const posts = response.map((post) => {
    return {
      slug: post.uid,
      title: post.data.title,
      excerpt:
        post.data.content.find(
          (content: { type: string }) => content.type === "paragraph",
        )?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        },
      ),
    };
  });

  return {
    props: { posts },
  };
};
