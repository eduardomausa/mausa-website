import React from "react";
import { render } from "@testing-library/react";
import HomeDescription from ".";
import "@testing-library/jest-dom";

jest.mock("../Avatar", () => {
  return {
    __esModule: true,
    default: jest.fn(() => (
      <div data-testid="avatar-component">Mocked Avatar</div>
    )),
  };
});

describe("HomeDescription component", () => {
  it("should render the home description component correctly", () => {
    const { getByText, getByTestId } = render(<HomeDescription />);

    const title = getByText("eduardo mausa");
    expect(title).toBeInTheDocument();

    const description = getByText(
      "💻 software engineer 📚 philosophy graduate",
    );
    expect(description).toBeInTheDocument();

    const avatar = getByTestId("avatar-component");
    expect(avatar).toBeInTheDocument();
  });
});
