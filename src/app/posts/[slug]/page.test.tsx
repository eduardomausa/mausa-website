import { render } from "@testing-library/react";
import PostPage from "./page";
import { getPost } from "@/services/prismic/getPost";

jest.mock("../../../services/prismic/prismic", () => ({
  getPrismiscClient: () => ({
    getByUID: async (type: string, slug: string) =>
      Promise.resolve({
        data: {
          title: "Post title",
          content: [{ type: "paragraph", text: "<p>html</p>" }],
        },
        last_publication_date: "2020-01-01",
      }),
  }),
}));

jest.mock("prismic-dom", () => ({
  RichText: { asHtml: (content: any) => "<p>rendered</p>" },
}));

describe("getPost", () => {
  it("returns post shape", async () => {
    const post = await getPost("post-1");
    expect(post.slug).toBe("post-1");
    expect(post.title).toBe("Post title");
    expect(post.content).toBe("<p>rendered</p>");
  });
});

describe("post page errors", () => {
  it("throws when params is missing", async () => {
    const mod = await import("./page");
    await expect(mod.default({} as any)).rejects.toThrow(
      "Missing slug param for post page",
    );
  });
});

describe("getPost and PostPage happy path", () => {
  it("getPost returns shape and PostPage renders", async () => {
    const post = await getPost("post-3");
    expect(post.title).toBe("Post title");

    const { container } = render(
      (<PostPage params={Promise.resolve({ slug: "post-3" })} />) as any,
    );
    expect(container).toBeTruthy();
  });
});
