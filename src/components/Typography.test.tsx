import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Header,
  Header2,
  Paragraph,
  ButtonLink,
  UnorderedList,
  OrderedList,
  ListItem,
  InternalLink,
  ExternalLink,
} from "./Typography";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

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
        </Paragraph>,
      );
      expect(screen.getByText("bold")).toBeInTheDocument();
      expect(screen.getByText("bold").tagName).toBe("STRONG");
    });
  });

  describe("ButtonLink", () => {
    it("renders button element", () => {
      render(<ButtonLink onClick={vi.fn()}>Click me</ButtonLink>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("displays button text", () => {
      render(<ButtonLink onClick={vi.fn()}>Click me</ButtonLink>);
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("handles click events", async () => {
      const onClick = vi.fn();
      render(<ButtonLink onClick={onClick}>Click me</ButtonLink>);
      await userEvent.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("InternalLink", () => {
    it("renders link element", () => {
      render(<InternalLink to="/about">Home</InternalLink>);
      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
    });

    it("has correct href", () => {
      render(<InternalLink to="/about">About</InternalLink>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/about");
    });
  });

  describe("ExternalLink", () => {
    it("renders anchor element", () => {
      render(<ExternalLink to="https://example.com">External</ExternalLink>);
      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
    });

    it("has correct href", () => {
      render(<ExternalLink to="https://example.com">External</ExternalLink>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "https://example.com");
    });

    it("opens in new tab", () => {
      render(<ExternalLink to="https://example.com">External</ExternalLink>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
    });

    it("has security attributes", () => {
      render(<ExternalLink to="https://example.com">External</ExternalLink>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("UnorderedList", () => {
    it("renders ul element", () => {
      render(
        <UnorderedList>
          <li>Item 1</li>
        </UnorderedList>,
      );
      const ul = screen.getByRole("list");
      expect(ul.tagName).toBe("UL");
    });

    it("renders list items", () => {
      render(
        <UnorderedList>
          <li>Item 1</li>
          <li>Item 2</li>
        </UnorderedList>,
      );
      const items = screen.getAllByRole("listitem");
      expect(items).toHaveLength(2);
    });
  });

  describe("OrderedList", () => {
    it("renders ol element", () => {
      render(
        <OrderedList>
          <li>Item 1</li>
        </OrderedList>,
      );
      const ol = screen.getByRole("list");
      expect(ol.tagName).toBe("OL");
    });

    it("renders list items", () => {
      render(
        <OrderedList>
          <li>First</li>
          <li>Second</li>
        </OrderedList>,
      );
      const items = screen.getAllByRole("listitem");
      expect(items).toHaveLength(2);
    });
  });

  describe("ListItem", () => {
    it("renders li element", () => {
      render(
        <ul>
          <ListItem>Item</ListItem>
        </ul>,
      );
      const item = screen.getByRole("listitem");
      expect(item).toBeInTheDocument();
    });

    it("displays item content", () => {
      render(
        <ul>
          <ListItem>Item content</ListItem>
        </ul>,
      );
      expect(screen.getByText("Item content")).toBeInTheDocument();
    });
  });
});
