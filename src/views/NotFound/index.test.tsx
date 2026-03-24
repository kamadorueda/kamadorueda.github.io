import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotFound } from "./index";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/notfound" }),
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe("NotFound view", () => {
  it("renders the page", () => {
    render(<NotFound />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("displays 404 heading", () => {
    render(<NotFound />);
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });

  it("displays helpful message", () => {
    render(<NotFound />);
    expect(
      screen.getByText(/landing page/i)
    ).toBeInTheDocument();
  });

  it("includes link back to home", () => {
    render(<NotFound />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("includes navigation", () => {
    const { container } = render(<NotFound />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });
});
