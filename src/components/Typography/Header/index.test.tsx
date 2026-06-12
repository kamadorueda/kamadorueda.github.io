import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  describe("Primary", () => {
    it("renders h1 with correct text", () => {
      render(<Header.Primary>Main Title</Header.Primary>);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveTextContent("Main Title");
    });

    it("applies default primary styles", () => {
      const { container } = render(<Header.Primary>Main Title</Header.Primary>);
      const h1 = container.querySelector("h1");
      expect(h1).toHaveClass(
        "text-ctextdark",
        "text-center",
        "text-xl",
        "font-bold",
      );
    });

    it("merges custom className with default styles", () => {
      const { container } = render(
        <Header.Primary className="custom-class">Main Title</Header.Primary>,
      );
      const h1 = container.querySelector("h1");
      expect(h1).toHaveClass("custom-class", "text-ctextdark");
    });

    it("can be called as Header (default export)", () => {
      render(<Header>Main Title</Header>);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveTextContent("Main Title");
    });
  });

  describe("Secondary", () => {
    it("renders h2 with correct text", () => {
      render(<Header.Secondary>Subtitle</Header.Secondary>);
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toHaveTextContent("Subtitle");
    });

    it("applies default secondary styles", () => {
      const { container } = render(
        <Header.Secondary>Subtitle</Header.Secondary>,
      );
      const h2 = container.querySelector("h2");
      expect(h2).toHaveClass("text-ctextdark", "mt-16", "text-lg", "font-bold");
    });

    it("merges custom className with default styles", () => {
      const { container } = render(
        <Header.Secondary className="custom-class">Subtitle</Header.Secondary>,
      );
      const h2 = container.querySelector("h2");
      expect(h2).toHaveClass("custom-class", "text-ctextdark");
    });
  });

  describe("Tertiary", () => {
    it("renders h3 with correct text", () => {
      render(<Header.Tertiary>Sub-subtitle</Header.Tertiary>);
      const heading = screen.getByRole("heading", { level: 3 });
      expect(heading).toHaveTextContent("Sub-subtitle");
    });

    it("applies default tertiary styles", () => {
      const { container } = render(
        <Header.Tertiary>Sub-subtitle</Header.Tertiary>,
      );
      const h3 = container.querySelector("h3");
      expect(h3).toHaveClass(
        "text-ctextdark",
        "mt-8",
        "text-base",
        "font-bold",
      );
    });

    it("merges custom className with default styles", () => {
      const { container } = render(
        <Header.Tertiary className="custom-class">
          Sub-subtitle
        </Header.Tertiary>,
      );
      const h3 = container.querySelector("h3");
      expect(h3).toHaveClass("custom-class", "text-ctextdark");
    });
  });
});
