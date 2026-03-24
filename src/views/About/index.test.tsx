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
  it("renders page with heading, intro, links, and navigation", () => {
    const { container } = render(<About />);
    const main = screen.getByRole("main");
    const nav = container.querySelector("nav");
    const links = screen.getAllByRole("link");

    expect(main).toBeInTheDocument();
    expect(screen.getByText("Kevin Amado")).toBeInTheDocument();
    expect(
      screen.getByText(/I'm a Software Engineer based in Calgary/i)
    ).toBeInTheDocument();
    expect(links.length).toBeGreaterThan(0);
    expect(nav).toBeInTheDocument();
  });
});
