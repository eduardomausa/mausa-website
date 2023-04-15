import React from "react";
import { render, screen } from "@testing-library/react";
import Contacts from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Contacts", () => {
  it("should render social media icons correctly", () => {
    // Render the component
    const { getByTestId } = render(<Contacts />);

    // Use the 'screen' object to query for social media icons
    const instagramIcon = getByTestId("instagram-icon");
    const twitterIcon = getByTestId("twitter-icon");
    const githubIcon = getByTestId("github-icon");

    // Assert that the icons are present
    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });

  it("should render social media links correctly", () => {
    // Render the component
    const { getByTestId } = render(<Contacts />);

    // Use the 'screen' object to query for social media icons
    const instagramIcon = getByTestId("instagram-link");
    const twitterIcon = getByTestId("twitter-link");
    const githubIcon = getByTestId("github-link");

    // Assert that the icons are present
    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });
});
