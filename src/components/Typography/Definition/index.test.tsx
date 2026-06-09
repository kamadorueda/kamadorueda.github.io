import { render, screen } from "@testing-library/react";
import { Definition } from "./index";

describe("Definition", () => {
  it("renders term and children correctly", () => {
    render(
      <Definition term="Test Term">This is the definition content</Definition>,
    );

    expect(screen.getByText("Test Term")).toBeInTheDocument();
    expect(
      screen.getByText("This is the definition content"),
    ).toBeInTheDocument();
  });

  it("uses semantic dl/dt/dd structure", () => {
    const { container } = render(
      <Definition term="Example">Content here</Definition>,
    );

    const dl = container.querySelector("dl");
    const dt = container.querySelector("dt");
    const dd = container.querySelector("dd");

    expect(dl).toBeInTheDocument();
    expect(dt).toBeInTheDocument();
    expect(dd).toBeInTheDocument();
  });

  it("applies custom className to dl element", () => {
    const { container } = render(
      <Definition term="Term" className="custom-class">
        Content
      </Definition>,
    );

    const dl = container.querySelector("dl");
    expect(dl).toHaveClass("custom-class");
  });

  it("applies font-semibold to dt element", () => {
    const { container } = render(
      <Definition term="Bold Term">Definition</Definition>,
    );

    const dt = container.querySelector("dt");
    expect(dt).toHaveClass("font-semibold");
  });

  it("applies ml-4 margin to dd element", () => {
    const { container } = render(
      <Definition term="Term">Indented definition</Definition>,
    );

    const dd = container.querySelector("dd");
    expect(dd).toHaveClass("ml-4");
  });

  it("renders term as ReactNode (supports JSX)", () => {
    render(
      <Definition term={<span className="term-span">JSX Term</span>}>
        Content with JSX term
      </Definition>,
    );

    expect(screen.getByText("JSX Term")).toBeInTheDocument();
    expect(screen.getByText("JSX Term")).toHaveClass("term-span");
  });

  it("renders children with text-ctext class", () => {
    const { container } = render(
      <Definition term="Term">Definition text</Definition>,
    );

    const dl = container.querySelector("dl");
    expect(dl).toHaveClass("text-ctext");
  });

  it("renders children with mt-4 class", () => {
    const { container } = render(
      <Definition term="Term">Definition</Definition>,
    );

    const dl = container.querySelector("dl");
    expect(dl).toHaveClass("mt-4");
  });
});
