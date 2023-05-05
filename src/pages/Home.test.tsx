import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from ".";

describe("Home component", () => {
  it("should render the Home component correctly", () => {
    const { getByText } = render(<Home />);

    const title = getByText("Eduardo Mausa");
    const description = getByText(
      "Desenvolvedor Frontend e Bacharel em Filosofia.",
    );
    const footer = getByText("© Eduardo Mausa 2023");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
