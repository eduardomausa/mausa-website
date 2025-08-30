import About from "./page";
import { render } from "@testing-library/react";

describe("About page", () => {
  it("renders without crashing", async () => {
    const { container } = render((<About />) as any);
    expect(container).toBeTruthy();
  });
});
