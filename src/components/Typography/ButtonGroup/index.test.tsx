import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ButtonGroup } from "./index";

describe("ButtonGroup", () => {
  it("renders children in a container", () => {
    const { container } = render(
      <ButtonGroup>
        <button>Button 1</button>
        <button>Button 2</button>
      </ButtonGroup>,
    );

    expect(container.querySelector("button")).toBeInTheDocument();
  });

  it("applies fullRounded variant styles by default", () => {
    const { container } = render(
      <ButtonGroup>
        <button>Button</button>
      </ButtonGroup>,
    );

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass("rounded-full");
    expect(div).toHaveClass("grid-flow-col");
  });

  it("applies bottomRounded variant styles", () => {
    const { container } = render(
      <ButtonGroup variant="bottomRounded">
        <button>Button</button>
      </ButtonGroup>,
    );

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass("rounded-b-3xl");
    expect(div).toHaveClass("border");
  });

  it("merges custom className with variant styles", () => {
    const { container } = render(
      <ButtonGroup className="custom-class">
        <button>Button</button>
      </ButtonGroup>,
    );

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass("custom-class");
    expect(div).toHaveClass("rounded-full");
  });

  it("applies base styles to both variants", () => {
    const { container: container1 } = render(
      <ButtonGroup variant="fullRounded">
        <button>Button</button>
      </ButtonGroup>,
    );

    const { container: container2 } = render(
      <ButtonGroup variant="bottomRounded">
        <button>Button</button>
      </ButtonGroup>,
    );

    const div1 = container1.firstChild as HTMLElement;
    const div2 = container2.firstChild as HTMLElement;

    // Both should have grid and items-center base styles
    expect(div1).toHaveClass("grid", "items-center");
    expect(div2).toHaveClass("grid", "items-center");
    // Each variant has its own width
    expect(div1).toHaveClass("w-fit");
    expect(div2).toHaveClass("w-full");
  });

  it("renders multiple children", () => {
    const { container } = render(
      <ButtonGroup>
        <button>Play</button>
        <button>Highlight</button>
        <button>Slower</button>
      </ButtonGroup>,
    );

    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(3);
  });

  it("maintains semantic HTML structure", () => {
    const { container } = render(
      <ButtonGroup>
        <button>Button</button>
      </ButtonGroup>,
    );

    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
    expect(div?.querySelector("button")).toBeInTheDocument();
  });
});
