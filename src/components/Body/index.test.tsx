import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Body } from "./index";

describe("Body component", () => {
  it("renders children, wraps content, and applies gradient and layout classes", () => {
    const { container } = render(
      <Body>
        <div>Test content</div>
      </Body>,
    );
    const outerDiv = container.firstChild as HTMLElement;
    const divs = container.querySelectorAll("div");

    expect(screen.getByText("Test content")).toBeInTheDocument();
    expect(divs.length).toBeGreaterThan(0);
    expect(outerDiv.className).toContain("min-h-screen");
    expect(outerDiv.className).toContain("bg-linear-to-tr");
  });
});
