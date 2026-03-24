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
  it("renders page with heading, disclaimer text, navigation, and footer", () => {
    const { container } = render(<Disclaimers />);
    const main = screen.getByRole("main");
    const nav = container.querySelector("nav");
    const footer = container.querySelector("footer");

    expect(main).toBeInTheDocument();
    expect(screen.getByText("Disclaimers")).toBeInTheDocument();
    expect(screen.getByText(/general in nature/i)).toBeInTheDocument();
    expect(screen.getByText(/financial advice/i)).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
