import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Thought } from "./Thought";

// Mock useParams to return a thought id
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: "financial-literacy" }),
  };
});

// Mock react-helmet
vi.mock("react-helmet", () => ({
  Helmet: ({ children }: any) => <>{children}</>,
}));

describe("Thought", () => {
  it("renders thought content for valid id", () => {
    render(
      <BrowserRouter>
        <Thought />
      </BrowserRouter>,
    );

    expect(screen.getByText("Financial Literacy")).toBeInTheDocument();
  });

  it("includes Nav and Footer", () => {
    const { container } = render(
      <BrowserRouter>
        <Thought />
      </BrowserRouter>,
    );

    const nav = container.querySelector("nav");
    const footer = container.querySelector("footer");

    expect(nav).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
