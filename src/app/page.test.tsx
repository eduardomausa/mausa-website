import Home from "./page";
import { render } from "@testing-library/react";

describe("Home page", () => {
  it("renders header and components", () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });
});
