import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  let mainContainer: HTMLElement;

  beforeEach(() => {
    render(<Home />);
    mainContainer = screen.getByRole("main");
  });

  test("Sould render main container", () => {
    expect(mainContainer).toBeInTheDocument();
  });
});
