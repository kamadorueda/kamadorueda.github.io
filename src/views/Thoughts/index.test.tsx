import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Thoughts } from "./index";

describe("Thoughts", () => {
  it("displays thought list with heading and intro", () => {
    const { container } = render(
      <BrowserRouter>
        <Thoughts />
      </BrowserRouter>,
    );

    const heading = screen.getByRole("heading", { level: 1, name: "Thoughts" });
    const nav = container.querySelector("nav");

    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/collection of writings/i)).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });

  it("renders all thoughts as list items", () => {
    render(
      <BrowserRouter>
        <Thoughts />
      </BrowserRouter>,
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });

  it("displays minutes read for each thought", () => {
    render(
      <BrowserRouter>
        <Thoughts />
      </BrowserRouter>,
    );

    expect(screen.getByText(/minutes read/i)).toBeInTheDocument();
  });
});

