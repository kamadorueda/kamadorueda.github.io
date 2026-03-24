import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer component", () => {
  it("renders footer element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("displays copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/©.*Kevin Amado/)).toBeInTheDocument();
  });

  it("displays current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it("contains paragraph element", () => {
    const { container } = render(<Footer />);
    const paragraph = container.querySelector("footer p");
    expect(paragraph).toBeInTheDocument();
  });
});
