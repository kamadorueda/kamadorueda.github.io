import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Content, metadata } from "./index";

describe("FinancialLiteracy.Content", () => {
  it("renders content without crashing", () => {
    render(
      <BrowserRouter>
        <Content />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(/Many people want to accumulate wealth/i),
    ).toBeInTheDocument();
  });

  it("contains multiple paragraphs", () => {
    const { container } = render(
      <BrowserRouter>
        <Content />
      </BrowserRouter>,
    );

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBeGreaterThan(1);
  });

  it("contains links", () => {
    render(
      <BrowserRouter>
        <Content />
      </BrowserRouter>,
    );

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("exports metadata with required fields", () => {
    expect(metadata.id).toBe("financial-literacy");
    expect(metadata.title).toBe("Financial Literacy");
    expect(metadata.minutes).toBe(4);
    expect(metadata.summary).toBe("Know your opportunity costs");
  });
});
