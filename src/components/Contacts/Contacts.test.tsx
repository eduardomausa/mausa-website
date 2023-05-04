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
    const linkedinIcon = getByTestId("linkedin-icon");

    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  it("should render social media links correctly", () => {
    const { getByTestId } = render(<Contacts />);

    const instagramLink = getByTestId("instagram-link");
    const twitterLink = getByTestId("twitter-link");
    const githubLink = getByTestId("github-link");
    const linkedinLink = getByTestId("linkedin-link");

    expect(instagramLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });
});
