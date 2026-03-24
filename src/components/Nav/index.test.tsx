import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Nav } from "./index";

// Mock react-router-dom with pathname option
const mockUseLocation = vi.fn(() => ({
  pathname: "/",
}));

vi.mock("react-router-dom", () => ({
  useLocation: () => mockUseLocation(),
  Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

describe("Nav component", () => {
  it("renders nav element with desktop and mobile variants", () => {
    const { container } = render(<Nav />);
    const nav = screen.getByRole("navigation");
    const desktopNav = container.querySelector(".hidden.sm\\:block");
    const mobileNav = container.querySelector(".sm\\:hidden");

    expect(nav).toBeInTheDocument();
    expect(desktopNav).toBeInTheDocument();
    expect(mobileNav).toBeInTheDocument();
  });

  it("includes SVG icons and symbol definitions", () => {
    const { container } = render(<Nav />);
    const svg = container.querySelector("svg");
    const symbols = container.querySelectorAll("symbol");

    expect(svg).toBeInTheDocument();
    expect(symbols.length).toBeGreaterThan(0);
  });

  it("renders menu button on mobile", () => {
    render(<Nav />);
    const menuButtons = screen.queryAllByText("Menu");

    expect(menuButtons.length).toBeGreaterThan(0);
  });
});

describe("Nav component - routing", () => {
  it("handles about route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/about" });
    render(<Nav />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("handles gallery route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/gallery" });
    render(<Nav />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("handles projects route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/projects" });
    render(<Nav />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("handles thoughts route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/thoughts" });
    render(<Nav />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("handles unknown route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/unknown" });
    render(<Nav />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
