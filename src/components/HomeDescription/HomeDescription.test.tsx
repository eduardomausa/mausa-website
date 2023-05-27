import React from "react";
import { render } from "@testing-library/react";
import HomeDescription from ".";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../Avatar", () => {
  return {
    __esModule: true,
    default: jest.fn(() => (
      <div data-testid="avatar-component">Mocked Avatar</div>
    )),
  };
});

jest.mock("../Contacts", () => {
  return {
    __esModule: true,
    default: jest.fn(() => (
      <div data-testid="contacts-component">Mocked Contacts</div>
    )),
  };
});

describe("HomeDescription component", () => {
  it("should render the home description component correctly", () => {
    const { getByText, getByTestId } = render(<HomeDescription />);

    const title = getByText("Eduardo Mausa");
    expect(title).toBeInTheDocument();

    const description = getByText(
      "💻 Software engineer 📚 Philosophy graduate",
    );
    expect(description).toBeInTheDocument();

    const avatar = getByTestId("avatar-component");
    expect(avatar).toBeInTheDocument();

    const contacts = getByTestId("contacts-component");
    expect(contacts).toBeInTheDocument();
  });
});
