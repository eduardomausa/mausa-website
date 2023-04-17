import { getPrismiscClient } from "./prismic";

jest.mock("@prismicio/client", () => ({
  getRepositoryEndpoint: (repositoryName: string) =>
    `https://${repositoryName}.cdn.prismic.io/api/v2`,
  createClient: jest.fn(),
}));

describe("getPrismicClient service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return a Prismic client with correct configuration", () => {
    const mockAccessToken = "your-access-token";
    process.env.PRISMIC_ACCESS_TOKEN = mockAccessToken;

    const client = getPrismiscClient();

    expect(require("@prismicio/client").createClient).toHaveBeenCalledWith(
      `https://mausa-blog.cdn.prismic.io/api/v2`,
      {
        accessToken: mockAccessToken,
      },
    );

    expect(client).not.toBeNull();
  });
});
