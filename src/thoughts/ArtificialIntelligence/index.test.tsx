import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Content, metadata } from "./index";

describe("ArtificialIntelligence.Content", () => {
  it("renders content without crashing", () => {
    render(<Content />);

    expect(screen.getByText(/A year ago, I coded/i)).toBeInTheDocument();
  });

  it("contains multiple paragraphs", () => {
    const { container } = render(<Content />);

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBeGreaterThan(1);
  });

  it("exports metadata with required fields", () => {
    expect(metadata.id).toBe("artificial-intelligence");
    expect(metadata.title).toBe("Artificial Intelligence");
    expect(metadata.minutes).toBe(7);
    expect(metadata.summary).toBe(
      "How AI agents are changing what it means to be a software engineer",
    );
  });
});
