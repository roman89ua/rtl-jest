import { render } from "@testing-library/react";
import RootLayout from "./layout";

test("renders children inside RootLayout", () => {
  const { getByTestId } = render(
    <RootLayout>
      <div data-testid="child-component">Children component</div>
    </RootLayout>
  );

  const childComponent = getByTestId("child-component");
  expect(childComponent).toBeInTheDocument();
});
