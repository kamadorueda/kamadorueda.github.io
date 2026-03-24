import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { CloseIcon } from "./index";

describe("CloseIcon", () => {
  it("renders SVG icon without crashing", () => {
    const { container } = render(<CloseIcon />);
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  });

  it("accepts and spreads SVG props", () => {
    const { container } = render(<CloseIcon className="custom-class" />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveClass("custom-class");
  });
});
