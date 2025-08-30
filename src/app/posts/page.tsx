import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PostsList from "@/components/PostsList/PostsList";
import { getPrismiscClient } from "@/services/prismic/prismic";

export async function getPostsList() {
  const client = getPrismiscClient();

  const response = await client.getAllByType("post");

  return response.map((post) => {
    if (!post.uid) {
      throw new Error("Post is missing uid");
    }

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
}

export default async function PostsListPage() {
  const posts = await getPostsList();

  return (
    <>
      <Header />
      <PostsList posts={posts} />
      <Footer />
    </>
  );
}
