import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { Nav } from "./index";

// Mock react-router-dom
const mockUseLocation = vi.fn(() => ({
  pathname: "/",
}));

vi.mock("react-router-dom", () => ({
  useLocation: () => mockUseLocation(),
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe("Nav component - snapshots", () => {
  it("matches snapshot on home route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/" });
    const { container } = render(<Nav />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot on gallery route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/gallery" });
    const { container } = render(<Nav />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot on projects route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/projects" });
    const { container } = render(<Nav />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot on unknown route", () => {
    mockUseLocation.mockReturnValue({ pathname: "/unknown" });
    const { container } = render(<Nav />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
