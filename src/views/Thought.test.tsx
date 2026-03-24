import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { Thought } from "./Thought";

vi.mock("react-helmet", () => ({
  Helmet: ({ children }: any) => <>{children}</>,
}));

describe("Thought", () => {
  it("renders without crashing", () => {
    const { container } = render(<Thought />);
    expect(container).toBeTruthy();
  });
});
