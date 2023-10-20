import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from ".";
import Link from "next/link";
import "@testing-library/jest-dom/extend-expect";

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
    const postsLink = screen.getByText("posts");

    expect(homeLink).toBeInTheDocument();
    expect(postsLink).toBeInTheDocument();

    const links = screen.getAllByTestId("mocked-link");

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/posts");
  });
});
