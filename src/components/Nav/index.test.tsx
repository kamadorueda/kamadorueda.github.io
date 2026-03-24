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

describe("Nav component - routing", () => {
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
