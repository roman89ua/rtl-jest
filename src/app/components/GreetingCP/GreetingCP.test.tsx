import { screen, render } from "@testing-library/react";
import GreetingCP from "@/app/components/GreetingCP";

describe("GreetingCP ", () => {
  it("Should have GreetingCP rendered with text hello", () => {
    render(<GreetingCP />);
    const docsElement = screen.getByText(/hello guest/i);
    expect(docsElement).toBeInTheDocument();
  });

  it("Should have greeting text with name", () => {
    render(<GreetingCP name="Roman" />);
    const docsElement = screen.getByText(/hello roman/i);
    expect(docsElement).toBeInTheDocument();
  });
});
