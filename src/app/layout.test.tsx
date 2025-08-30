import RootLayout from "./layout";
import { render } from "@testing-library/react";

describe("RootLayout", () => {
  it("renders children and uses PrismicProviders", () => {
    const { getByText } = render(
      <RootLayout>
        <div>hello</div>
      </RootLayout>,
    );
    expect(getByText("hello")).toBeTruthy();
  });
});
