import { render } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import { Avatar } from ".";

describe("Avatar component", () => {
  test("it should render with correct image source and alt text", () => {
    const { getByAltText } = render(<Avatar />);

    const imageElement = getByAltText("Eduardo Mausa avatar");

    expect(imageElement).toHaveProperty("src", "avatar.jpg");
    expect(imageElement).toHaveProperty("width", "240");
    expect(imageElement).toHaveProperty("height", "240");
  });
});
