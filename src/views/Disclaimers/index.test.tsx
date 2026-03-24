import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Disclaimers } from "./index";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/disclaimers" }),
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

describe("Disclaimers view", () => {
  it("renders the page", () => {
    render(<Disclaimers />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("displays Disclaimers heading", () => {
    render(<Disclaimers />);
    expect(screen.getByText("Disclaimers")).toBeInTheDocument();
  });

  it("displays disclaimer paragraphs", () => {
    render(<Disclaimers />);
    expect(
      screen.getByText(/general in nature/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/financial advice/i)
    ).toBeInTheDocument();
  });

  it("includes navigation", () => {
    const { container } = render(<Disclaimers />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });

  it("has footer", () => {
    const { container } = render(<Disclaimers />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
