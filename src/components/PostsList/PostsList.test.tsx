import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostsList from "./PostsList";

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

describe("PostsList component", () => {
  it("should render placeholder when no posts are provided", () => {
    render(<PostsList posts={[]} />);

    expect(screen.getByText("Work in progress")).toBeInTheDocument();
  });

  it("should render posts list with links and content", () => {
    const posts = [
      {
        slug: "post-1",
        title: "Post One",
        excerpt: "Excerpt 1",
        updatedAt: "Aug 1, 2025",
      },
      {
        slug: "post-2",
        title: "Post Two",
        excerpt: "Excerpt 2",
        updatedAt: "Aug 2, 2025",
      },
    ];

    render(<PostsList posts={posts} />);

    expect(screen.getByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
    expect(screen.getByText("Excerpt 1")).toBeInTheDocument();
    expect(screen.getByText("Excerpt 2")).toBeInTheDocument();
    expect(screen.getByText("Aug 1, 2025")).toBeInTheDocument();
    expect(screen.getByText("Aug 2, 2025")).toBeInTheDocument();

    const links = screen.getAllByTestId("mocked-link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/posts/post-1");
    expect(links[1]).toHaveAttribute("href", "/posts/post-2");
  });
});
