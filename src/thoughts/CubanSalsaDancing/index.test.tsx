import { render, screen } from "@testing-library/react";
import { Content, metadata } from "./index";
import { vi } from "vitest";

// Mock Move component to simplify tests
vi.mock("./Move", () => ({
  Move: ({ name, children }: any) => (
    <div data-testid={`move-${name}`}>{name}</div>
  ),
}));

describe("CubanSalsaDancing", () => {
  describe("metadata", () => {
    it("has correct id", () => {
      expect(metadata.id).toBe("cuban-salsa-dancing");
    });

    it("has correct minutes", () => {
      expect(metadata.minutes).toBe(9);
    });

    it("has correct title", () => {
      expect(metadata.title).toBe("Cuban Salsa Dancing");
    });

    it("has correct summary", () => {
      expect(metadata.summary).toContain(
        "A practical guide to learning Cuban salsa dancing",
      );
    });

    it("has relevant tags", () => {
      expect(metadata.tags).toContain("dance");
      expect(metadata.tags).toContain("salsa");
      expect(metadata.tags).toContain("cuban");
      expect(metadata.tags.length).toBe(5);
    });

    it("has correct timestamp", () => {
      expect(metadata.timestamp.getFullYear()).toBe(2026);
      expect(metadata.timestamp.getMonth()).toBe(5); // June is month 5
      expect(metadata.timestamp.getDate()).toBe(7);
    });
  });

  describe("Content component", () => {
    it("renders opening paragraph about personal experience", () => {
      render(<Content />);
      expect(
        screen.getByText(/I started dancing salsa a month and a half ago/i),
      ).toBeInTheDocument();
    });

    it("renders paragraph about progression structure", () => {
      render(<Content />);
      expect(
        screen.getByText(
          /This page is a progression built for one-on-one social dancing/i,
        ),
      ).toBeInTheDocument();
    });

    it("renders paragraph about learning approach", () => {
      render(<Content />);
      expect(
        screen.getByText(/As a follow, don't learn steps by name/i),
      ).toBeInTheDocument();
    });

    it("renders section headers", () => {
      render(<Content />);
      expect(screen.getByText("Move with the music")).toBeInTheDocument();
      expect(screen.getByText("Her first guided turns")).toBeInTheDocument();
      expect(screen.getByText("Her first solo turns")).toBeInTheDocument();
    });

    it("renders connection section with guidance", () => {
      render(<Content />);
      expect(
        screen.getByText("Connection: the only language you have"),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /One-on-one, everything the follow knows arrives through the physical connection/i,
        ),
      ).toBeInTheDocument();
    });

    it("renders musicality section", () => {
      render(<Content />);
      expect(
        screen.getByText(
          "Musicality: dancing to the music, not just through it",
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Socially, you choose what to do to the music/i),
      ).toBeInTheDocument();
    });

    it("renders final section about social dancing", () => {
      render(<Content />);
      expect(
        screen.getByText(
          "Dancing for real: a stranger, a song you've never heard",
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/This is the actual goal: not running this ladder/i),
      ).toBeInTheDocument();
    });

    it("renders closing paragraph", () => {
      render(<Content />);
      expect(
        screen.getByText(
          /If you can have fun through a single song with someone new/i,
        ),
      ).toBeInTheDocument();
    });
  });
});
