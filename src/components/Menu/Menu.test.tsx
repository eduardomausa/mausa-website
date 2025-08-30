import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./Menu";

jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return (
      <a href={href} data-testid="mocked-link">
        {children}
      </a>
    );
  };
});

describe("Menu component", () => {
  it("should render the menu component with links", () => {
    render(<Menu />);

    const homeLink = screen.getByText("home");
    const aboutLink = screen.getByText("about");
    const postsLink = screen.getByText("posts");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(postsLink).toBeInTheDocument();

    const links = screen.getAllByTestId("mocked-link");

    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/about");
    expect(links[2]).toHaveAttribute("href", "/posts");
  });
});
