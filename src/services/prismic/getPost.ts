import PrismicDOM from "prismic-dom";
import { getPrismiscClient } from "@/services/prismic/prismic";

export interface Post {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
}
export async function getPost(slug: string): Promise<Post> {
  const prismic = getPrismiscClient();
  const response = await prismic.getByUID("post", slug);

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
