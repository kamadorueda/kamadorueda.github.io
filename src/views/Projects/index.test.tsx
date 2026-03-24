import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Projects } from "./index";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/projects" }),
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

describe("Projects view", () => {
  it("renders the page", () => {
    render(<Projects />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("displays Projects heading", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { level: 1, name: "Projects" })).toBeInTheDocument();
  });

  it("displays introduction paragraph", () => {
    render(<Projects />);
    expect(
      screen.getByText(/worked on tons of projects/i)
    ).toBeInTheDocument();
  });

  it("displays project sections", () => {
    render(<Projects />);
    expect(screen.getByText("Personal Projects")).toBeInTheDocument();
    expect(screen.getByText("Open Source Contributions")).toBeInTheDocument();
    expect(screen.getByText("Professional Contributions")).toBeInTheDocument();
  });

  it("includes navigation", () => {
    const { container } = render(<Projects />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });

  it("includes external links to projects", () => {
    render(<Projects />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(5);
  });

  it("displays list items for projects", () => {
    render(<Projects />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });
});
