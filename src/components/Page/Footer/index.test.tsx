import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("Footer component", () => {
  it("renders footer with copyright text, current year, and paragraph structure", () => {
    const { container } = render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    const paragraph = container.querySelector("footer p");
    const currentYear = new Date().getFullYear();

    expect(footer).toBeInTheDocument();
    expect(screen.getByText(/©.*Kevin Amado/)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(currentYear.toString())),
    ).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
