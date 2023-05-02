import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";
import "@testing-library/jest-dom/extend-expect";

describe("Home component", () => {
  it("should render the Header component", () => {
    render(<Home />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("should render the HomeDescription component", () => {
    render(<Home />);
    const homeDescription = screen.getByRole("main");
    expect(homeDescription).toBeInTheDocument();
  });

  it("should render the Footer component", () => {
    render(<Home />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
