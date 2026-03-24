import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Thoughts } from "./index";

// Mock react-router-dom
const mockSetSearchParams = vi.fn();
const mockUseSearchParams = vi.fn(() => [
  new URLSearchParams(),
  mockSetSearchParams,
]);
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/thoughts" }),
  useSearchParams: () => mockUseSearchParams(),
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
  it("displays thought list with heading, intro, and navigation", () => {
    const { container } = render(<Thoughts />);
    const main = screen.getByRole("main");
    const nav = container.querySelector("nav");
    const heading = screen.getByRole("heading", { level: 1, name: "Thoughts" });
    const listItems = screen.getAllByRole("listitem");

    expect(main).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/collection of writings/i)).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(listItems.length).toBeGreaterThan(0);
  });

  it("displays thought content when id parameter is provided", () => {
    const searchParams = new URLSearchParams("id=financial-literacy");
    mockUseSearchParams.mockReturnValue([searchParams, mockSetSearchParams]);
    render(<Thoughts />);
    const main = screen.getByRole("main");
    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Financial Literacy",
    });

    expect(main).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
