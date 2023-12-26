import { screen, render } from "@testing-library/react";
import Home from "@/app/page";

it("Should have Docs text", () => {
  render(<Home />);
  const docsElement = screen.getByText(/docs/i);
  expect(docsElement).toBeInTheDocument();
});
