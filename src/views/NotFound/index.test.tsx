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
  it("renders 404 page with heading, message, link, and navigation", () => {
    const { container } = render(<NotFound />);
    const main = screen.getByRole("main");
    const nav = container.querySelector("nav");
    const links = screen.getAllByRole("link");

    expect(main).toBeInTheDocument();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    expect(screen.getByText(/landing page/i)).toBeInTheDocument();
    expect(links.length).toBeGreaterThan(0);
    expect(nav).toBeInTheDocument();
  });
});
