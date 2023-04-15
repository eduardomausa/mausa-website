import { getPrismiscClient } from "./prismic";

jest.mock("@prismicio/client", () => ({
  getRepositoryEndpoint: (repositoryName: string) =>
    `https://${repositoryName}.cdn.prismic.io/api/v2`,
  createClient: jest.fn(),
}));

describe("getPrismicClient service", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Add this line to reset the mocked functions before each test
  });

  it("should return a Prismic client with correct configuration", () => {
    const mockAccessToken = "your-access-token";
    process.env.PRISMIC_ACCESS_TOKEN = mockAccessToken;

    // Call the getPrismicClient function
    const client = getPrismiscClient();

    // Assert that the createClient function was called with the correct arguments
    expect(require("@prismicio/client").createClient).toHaveBeenCalledWith(
      `https://mausa-blog.cdn.prismic.io/api/v2`,
      {
        accessToken: mockAccessToken,
      },
    );

    // Assert that the returned client is not null
    expect(client).not.toBeNull();
  });
});
