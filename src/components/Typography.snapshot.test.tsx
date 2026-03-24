import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import {
  Header,
  Header2,
  Paragraph,
  ButtonLink,
  InternalLink,
  ExternalLink,
  UnorderedList,
  OrderedList,
} from "./Typography";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe("Typography components - snapshots", () => {
  it("Header matches snapshot", () => {
    const { container } = render(<Header>Main Title</Header>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Header2 matches snapshot", () => {
    const { container } = render(<Header2>Subtitle</Header2>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Paragraph matches snapshot", () => {
    const { container } = render(
      <Paragraph>This is a paragraph with some text content.</Paragraph>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("ButtonLink matches snapshot", () => {
    const { container } = render(
      <ButtonLink onClick={() => {}}>Click Me</ButtonLink>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("InternalLink matches snapshot", () => {
    const { container } = render(<InternalLink to="/about">About</InternalLink>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("ExternalLink matches snapshot", () => {
    const { container } = render(
      <ExternalLink to="https://example.com">External Site</ExternalLink>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("UnorderedList matches snapshot", () => {
    const { container } = render(
      <UnorderedList>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </UnorderedList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("OrderedList matches snapshot", () => {
    const { container } = render(
      <OrderedList>
        <li>First step</li>
        <li>Second step</li>
        <li>Third step</li>
      </OrderedList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
