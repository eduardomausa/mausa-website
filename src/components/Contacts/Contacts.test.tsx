import React from "react";
import { render, screen } from "@testing-library/react";
import Contacts from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Contacts", () => {
  it("should render social media icons correctly", () => {
    const { getByTestId } = render(<Contacts />);

    const instagramIcon = getByTestId("instagram-icon");
    const twitterIcon = getByTestId("twitter-icon");
    const githubIcon = getByTestId("github-icon");

    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });

  it("should render social media links correctly", () => {
    const { getByTestId } = render(<Contacts />);

    const instagramIcon = getByTestId("instagram-link");
    const twitterIcon = getByTestId("twitter-link");
    const githubIcon = getByTestId("github-link");

    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });
});
