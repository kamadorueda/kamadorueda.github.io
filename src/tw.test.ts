import { describe, expect, it } from "vitest";
import { tw } from "./tw";

describe("tw", () => {
  it("joins class names with spaces", () => {
    expect(tw("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("filters out false", () => {
    expect(tw("base", false)).toBe("base");
  });

  it("filters out undefined", () => {
    expect(tw("base", undefined)).toBe("base");
  });

  it("handles conditional pattern", () => {
    const active = false;
    expect(tw("base", active && "active")).toBe("base");
  });
});
