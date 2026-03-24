import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Main } from "./Main";

describe("Main component", () => {
  it("renders main element", () => {
    render(<Main>Content</Main>);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<Main>Test content</Main>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies default mt-24 class", () => {
    const { container } = render(<Main>Content</Main>);
    const main = container.querySelector("main");
    expect(main).toHaveClass("mt-24");
  });

  it("accepts and applies custom className", () => {
    const { container } = render(<Main className="custom-class">Content</Main>);
    const main = container.querySelector("main");
    expect(main).toHaveClass("custom-class");
  });

  it("combines default and custom classes", () => {
    const { container } = render(<Main className="custom">Content</Main>);
    const main = container.querySelector("main");
    expect(main?.className).toContain("mt-24");
    expect(main?.className).toContain("custom");
  });

  it("renders complex children", () => {
    render(
      <Main>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
        </div>
      </Main>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
  });
});
