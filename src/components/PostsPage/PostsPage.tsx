'use client';
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
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.length <= 0 ? (
            <div>
              <p>Work in progress</p>
            </div>
          ) : null}
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
