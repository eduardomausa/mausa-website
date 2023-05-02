import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Footer component", () => {
  it("should render copyright text with correct year and name", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(
      "Todos os direitos reservados © Eduardo Mausa 2023",
    );

    expect(copyrightText).toBeInTheDocument();
  });
});
