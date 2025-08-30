import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PostsList from "@/components/PostsList/PostsList";
import { getPostsList } from "@/services/prismic/getPostsList";

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
