import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header, Header2, Paragraph } from "./Typography";

describe("Typography components", () => {
  describe("Header", () => {
    it("renders h1 element", () => {
      render(<Header>Test Heading</Header>);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it("displays heading text", () => {
      render(<Header>Test Heading</Header>);
      expect(screen.getByText("Test Heading")).toBeInTheDocument();
    });

    it("accepts className prop", () => {
      render(<Header className="custom-class">Test</Header>);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveClass("custom-class");
    });
  });

  describe("Header2", () => {
    it("renders h2 element", () => {
      render(<Header2>Subheading</Header2>);
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toBeInTheDocument();
    });

    it("displays heading text", () => {
      render(<Header2>Subheading</Header2>);
      expect(screen.getByText("Subheading")).toBeInTheDocument();
    });
  });

  describe("Paragraph", () => {
    it("renders paragraph element", () => {
      render(<Paragraph>Test paragraph</Paragraph>);
      const paragraph = screen.getByText("Test paragraph");
      expect(paragraph.tagName).toBe("P");
    });

    it("displays paragraph text", () => {
      render(<Paragraph>Test paragraph</Paragraph>);
      expect(screen.getByText("Test paragraph")).toBeInTheDocument();
    });

    it("accepts children elements", () => {
      render(
        <Paragraph>
          Text with <strong>bold</strong>
        </Paragraph>
      );
      expect(screen.getByText("bold")).toBeInTheDocument();
      expect(screen.getByText("bold").tagName).toBe("STRONG");
    });
  });
});
