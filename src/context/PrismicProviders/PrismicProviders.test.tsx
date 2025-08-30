import { render } from "@testing-library/react";
import PrismicProviders from "./PrismicProviders";

describe("PrismicProviders", () => {
  it("renders children", () => {
    const { getByText } = render(
      <PrismicProviders>
        <div>child</div>
      </PrismicProviders>,
    );
    expect(getByText("child")).toBeTruthy();
  });
});
