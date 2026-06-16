import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Nav } from "./index";

describe("Nav component", () => {
  it("renders nav element with desktop and mobile variants", () => {
    const { container } = render(<Nav current="Other" />);
    const nav = screen.getByRole("navigation");
    const desktopNav = container.querySelector(".hidden.sm\\:block");
    const mobileNav = container.querySelector(".sm\\:hidden");

    expect(nav).toBeInTheDocument();
    expect(desktopNav).toBeInTheDocument();
    expect(mobileNav).toBeInTheDocument();
  });

  it("includes SVG icons", () => {
    const { container } = render(<Nav current="Other" />);
    const svgs = container.querySelectorAll("svg");

    expect(svgs.length).toBeGreaterThan(0);
  });

  it("renders menu button on mobile", () => {
    render(<Nav current="Other" />);
    const menuButtons = screen.queryAllByText("Menu");

    expect(menuButtons.length).toBeGreaterThan(0);
  });
});

describe("Nav component - current location", () => {
  it("handles About location", () => {
    render(<Nav current="About" />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("handles Gallery location", () => {
    render(<Nav current="Gallery" />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("handles Projects location", () => {
    render(<Nav current="Projects" />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("handles Thoughts location", () => {
    render(<Nav current="Thoughts" />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("handles Other location", () => {
    render(<Nav current="Other" />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
