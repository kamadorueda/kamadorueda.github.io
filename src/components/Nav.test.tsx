import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Nav } from "./Nav";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  useLocation: () => ({
    pathname: "/",
  }),
  Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

describe("Nav component", () => {
  it("renders nav element", () => {
    render(<Nav />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("renders desktop nav", () => {
    const { container } = render(<Nav />);
    const desktopNav = container.querySelector(".hidden.sm\\:block");
    expect(desktopNav).toBeInTheDocument();
  });

  it("renders mobile nav", () => {
    const { container } = render(<Nav />);
    const mobileNav = container.querySelector(".sm\\:hidden");
    expect(mobileNav).toBeInTheDocument();
  });

  it("includes SVG icons", () => {
    const { container } = render(<Nav />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("contains symbol definitions", () => {
    const { container } = render(<Nav />);
    const symbols = container.querySelectorAll("symbol");
    expect(symbols.length).toBeGreaterThan(0);
  });

  it("renders menu button on mobile", () => {
    render(<Nav />);
    // PopoverButton contains "Menu" text
    const menuButtons = screen.queryAllByText("Menu");
    expect(menuButtons.length).toBeGreaterThan(0);
  });
});
