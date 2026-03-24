import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "./index";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/" }),
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe("About view", () => {
  it("renders the page", () => {
    render(<About />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("displays Kevin Amado heading", () => {
    render(<About />);
    expect(screen.getByText("Kevin Amado")).toBeInTheDocument();
  });

  it("displays introduction paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(/I'm a Software Engineer based in Calgary/i)
    ).toBeInTheDocument();
  });

  it("includes external links", () => {
    render(<About />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("includes navigation", () => {
    const { container } = render(<About />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });
});
