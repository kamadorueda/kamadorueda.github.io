import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Body } from "./index";

describe("Body component", () => {
  it("renders children", () => {
    render(
      <Body>
        <div>Test content</div>
      </Body>,
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("wraps content in div elements", () => {
    const { container } = render(
      <Body>
        <span>Inner</span>
      </Body>,
    );
    const divs = container.querySelectorAll("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("applies gradient and layout classes", () => {
    const { container } = render(
      <Body>
        <p>Content</p>
      </Body>,
    );
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv.className).toContain("min-h-screen");
    expect(outerDiv.className).toContain("bg-linear-to-tr");
  });
});
