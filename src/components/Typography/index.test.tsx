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
} from "./index";

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
    it("renders h1 element with text and supports className", () => {
      render(<Header className="custom-class">Test Heading</Header>);
      const heading = screen.getByRole("heading", { level: 1 });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Test Heading");
      expect(heading).toHaveClass("custom-class");
    });
  });

  describe("Header2", () => {
    it("renders h2 element with text", () => {
      render(<Header2>Subheading</Header2>);
      const heading = screen.getByRole("heading", { level: 2 });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Subheading");
    });
  });

  describe("Paragraph", () => {
    it("renders paragraph element with text", () => {
      render(<Paragraph>Test paragraph</Paragraph>);
      const paragraph = screen.getByText("Test paragraph");

      expect(paragraph.tagName).toBe("P");
    });

    it("accepts and renders children elements", () => {
      render(
        <Paragraph>
          Text with <strong>bold</strong>
        </Paragraph>,
      );
      const bold = screen.getByText("bold");

      expect(bold).toBeInTheDocument();
      expect(bold.tagName).toBe("STRONG");
    });
  });

  describe("ButtonLink", () => {
    it("renders button with text and handles click events", async () => {
      const onClick = vi.fn();
      render(<ButtonLink onClick={onClick}>Click me</ButtonLink>);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Click me");

      await userEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("InternalLink", () => {
    it("renders link with correct href", () => {
      render(<InternalLink to="/about">About</InternalLink>);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/about");
    });
  });

  describe("ExternalLink", () => {
    it("renders anchor with correct href, target, and security attributes", () => {
      render(<ExternalLink to="https://example.com">External</ExternalLink>);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://example.com");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("UnorderedList", () => {
    it("renders ul element with list items", () => {
      render(
        <UnorderedList>
          <li>Item 1</li>
          <li>Item 2</li>
        </UnorderedList>,
      );
      const ul = screen.getByRole("list");
      const items = screen.getAllByRole("listitem");

      expect(ul.tagName).toBe("UL");
      expect(items).toHaveLength(2);
    });
  });

  describe("OrderedList", () => {
    it("renders ol element with list items", () => {
      render(
        <OrderedList>
          <li>First</li>
          <li>Second</li>
        </OrderedList>,
      );
      const ol = screen.getByRole("list");
      const items = screen.getAllByRole("listitem");

      expect(ol.tagName).toBe("OL");
      expect(items).toHaveLength(2);
    });
  });

  describe("ListItem", () => {
    it("renders li element with content", () => {
      render(
        <ul>
          <ListItem>Item content</ListItem>
        </ul>,
      );
      const item = screen.getByRole("listitem");

      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent("Item content");
    });
  });
});
