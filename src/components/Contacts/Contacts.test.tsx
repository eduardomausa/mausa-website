import React from "react";
import { render } from "@testing-library/react";
import Contacts from ".";
import "@testing-library/jest-dom";

describe("Contacts", () => {
  it("should render social media icons correctly", () => {
    const { getByTestId } = render(<Contacts />);

    const twitterIcon = getByTestId("twitter-icon");
    const githubIcon = getByTestId("github-icon");
    const linkedinIcon = getByTestId("linkedin-icon");

    expect(twitterIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  it("should render social media links correctly", () => {
    const { getByTestId } = render(<Contacts />);

    const twitterLink = getByTestId("twitter-link");
    const githubLink = getByTestId("github-link");
    const linkedinLink = getByTestId("linkedin-link");

    expect(twitterLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });
});
