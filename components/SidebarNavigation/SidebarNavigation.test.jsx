import { render, screen } from "@testing-library/react";
import { SidebarNavigation } from "./";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<SidebarNavigation />);
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });
});
