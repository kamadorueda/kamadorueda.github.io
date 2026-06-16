import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Main } from "./index";

describe("Main component", () => {
  it("renders main element with children and supports className", () => {
    const { container: container1 } = render(<Main>Test content</Main>);
    const main1 = screen.getByRole("main");

    expect(main1).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
    expect(main1).toHaveClass("mt-24");
  });

  it("accepts custom className and combines with default classes", () => {
    const { container } = render(<Main className="custom">Content</Main>);
    const main = container.querySelector("main");

    expect(main).toHaveClass("custom");
    expect(main?.className).toContain("mt-24");
  });

  it("renders complex children with nested elements", () => {
    render(
      <Main>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
        </div>
      </Main>,
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
  });
});
