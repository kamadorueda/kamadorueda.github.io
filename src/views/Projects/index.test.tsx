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
  it("renders page with heading, intro, project sections, links, and navigation", () => {
    const { container } = render(<Projects />);
    const main = screen.getByRole("main");
    const nav = container.querySelector("nav");
    const heading = screen.getByRole("heading", { level: 1, name: "Projects" });
    const links = screen.getAllByRole("link");
    const listItems = screen.getAllByRole("listitem");

    expect(main).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/worked on tons of projects/i)).toBeInTheDocument();
    expect(screen.getByText("Personal Projects")).toBeInTheDocument();
    expect(screen.getByText("Open Source Contributions")).toBeInTheDocument();
    expect(screen.getByText("Professional Contributions")).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(links.length).toBeGreaterThan(5);
    expect(listItems.length).toBeGreaterThan(0);
  });
});
