import * as prismic from "@prismicio/client";

export function getPrismiscClient(req?: unknown) {
  const endpoint = prismic.getRepositoryEndpoint("mausa-blog");
  const client = prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
}
