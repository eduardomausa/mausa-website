"use client";
import styles from "./styles.module.scss";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsProps) {
  return (
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
  );
}
