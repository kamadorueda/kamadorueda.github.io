import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Gallery } from "./index";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/gallery" }),
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

// Mock react-helmet
vi.mock("react-helmet", () => ({
  Helmet: ({ children }: any) => <>{children}</>,
}));

describe("Gallery view", () => {
  it("renders the page", () => {
    render(<Gallery />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("displays Gallery heading", () => {
    render(<Gallery />);
    expect(screen.getByRole("heading", { level: 1, name: "Gallery" })).toBeInTheDocument();
  });

  it("displays introduction paragraph", () => {
    render(<Gallery />);
    expect(
      screen.getByText(/Still Life/i)
    ).toBeInTheDocument();
  });

  it("includes navigation", () => {
    const { container } = render(<Gallery />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });

  it("includes external links", () => {
    render(<Gallery />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders image elements", () => {
    render(<Gallery />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
});
