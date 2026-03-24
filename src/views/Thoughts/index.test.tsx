import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Thoughts } from "./index";

// Mock react-router-dom
const mockSetSearchParams = vi.fn();
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/thoughts" }),
  useSearchParams: () => [
    new URLSearchParams(),
    mockSetSearchParams,
  ],
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

describe("Thoughts view", () => {
  it("renders the page", () => {
    render(<Thoughts />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("displays Thoughts heading", () => {
    render(<Thoughts />);
    expect(screen.getByRole("heading", { level: 1, name: "Thoughts" })).toBeInTheDocument();
  });

  it("displays introduction paragraph", () => {
    render(<Thoughts />);
    expect(
      screen.getByText(/collection of writings/i)
    ).toBeInTheDocument();
  });

  it("includes navigation", () => {
    const { container } = render(<Thoughts />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });

  it("displays thought list items", () => {
    render(<Thoughts />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });
});
