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
  it("renders page with heading, intro, images, links, and navigation", () => {
    const { container } = render(<Gallery />);
    const main = screen.getByRole("main");
    const nav = container.querySelector("nav");
    const heading = screen.getByRole("heading", { level: 1, name: "Gallery" });
    const links = screen.getAllByRole("link");
    const images = screen.getAllByRole("img");

    expect(main).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/Still Life/i)).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(links.length).toBeGreaterThan(0);
    expect(images.length).toBeGreaterThan(0);
  });
});
