import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Nav } from "./index";

describe("Nav component - snapshots", () => {
  it("matches snapshot on About location", () => {
    const { container } = render(<Nav current="About" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot on Gallery location", () => {
    const { container } = render(<Nav current="Gallery" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot on Projects location", () => {
    const { container } = render(<Nav current="Projects" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot on Other location", () => {
    const { container } = render(<Nav current="Other" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
