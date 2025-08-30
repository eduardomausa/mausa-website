import { getPostsList } from "./page";

jest.mock("../../services/prismic/prismic", () => ({
  getPrismiscClient: () => ({
    getAllByType: async (type: string) =>
      Promise.resolve([
        {
          uid: "post-1",
          data: {
            title: "Post 1",
            content: [{ type: "paragraph", text: "excerpt 1" }],
          },
          last_publication_date: "2020-01-01",
        },
      ]),
  }),
}));

describe("getPostsList", () => {
  it("returns posts list mapped", async () => {
    const posts = await getPostsList();
    expect(posts).toHaveLength(1);
    expect(posts[0].slug).toBe("post-1");
    expect(posts[0].title).toBe("Post 1");
    expect(posts[0].excerpt).toBe("excerpt 1");
  });
});

describe("getPostsList error cases", () => {
  it("throws when a post is missing uid", async () => {
    jest.resetModules();
    jest.doMock("../../services/prismic/prismic", () => ({
      getPrismiscClient: () => ({
        getAllByType: async () =>
          Promise.resolve([
            {
              // uid is intentionally missing
              data: { title: "No UID", content: [] },
              last_publication_date: "2020-01-01",
            },
          ]),
      }),
    }));

    const { getPostsList } = await import("./page");

    await expect(getPostsList()).rejects.toThrow("Post is missing uid");
  });
});

describe("getPostsList content fallback", () => {
  it("returns empty excerpt when no paragraph content is found", async () => {
    jest.resetModules();
    jest.doMock("../../services/prismic/prismic", () => ({
      getPrismiscClient: () => ({
        getAllByType: async () =>
          Promise.resolve([
            {
              uid: "post-2",
              data: {
                title: "Post 2",
                content: [{ type: "heading", text: "Not a paragraph" }],
              },
              last_publication_date: "2020-01-01",
            },
          ]),
      }),
    }));

    const { getPostsList } = await import("./page");
    const posts = await getPostsList();
    expect(posts[0].excerpt).toBe("");
  });
});
