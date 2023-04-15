import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";
import Menu from "../Menu";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../Menu", () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="mocked-menu">Mocked Menu</div>),
  };
});

describe("Header component", () => {
  it("should render header component with logo and menu", () => {
    render(<Header />);

    const logo = screen.getByText("<>");
    const mockedMenu = screen.getByTestId("mocked-menu");

    expect(logo).toBeInTheDocument();
    expect(mockedMenu).toBeInTheDocument();

    expect(Menu).toHaveBeenCalledTimes(1);
  });
});
