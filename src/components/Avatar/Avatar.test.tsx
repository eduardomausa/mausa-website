import { render } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import Avatar from ".";

describe("Avatar component", () => {
  it("it should render the image correctly", () => {
    const { getByAltText } = render(<Avatar />);

    const imageElement = getByAltText("Eduardo Mausa avatar");

    expect(imageElement).toHaveProperty("src");
    expect(imageElement).toHaveProperty("width", 240);
    expect(imageElement).toHaveProperty("height", 240);
  });
});
