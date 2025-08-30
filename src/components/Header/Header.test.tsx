import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import Menu from "../Menu/Menu";

jest.mock("../Menu/Menu", () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="mocked-menu">Mocked Menu</div>),
  };
});

describe("Header component", () => {
  it("should render header component with logo and menu", () => {
    render(<Header />);

    const logo = screen.getByText("</>");
    const mockedMenu = screen.getByTestId("mocked-menu");

    expect(logo).toBeInTheDocument();
    expect(mockedMenu).toBeInTheDocument();

    expect(Menu).toHaveBeenCalledTimes(1);
  });
});
