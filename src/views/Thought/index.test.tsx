import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Thought } from "./index";

vi.mock("react-helmet", () => ({
  Helmet: ({ children }: any) => <>{children}</>,
}));

describe("Thought", () => {
  it("renders thought content when id is known", () => {
    render(
      <MemoryRouter initialEntries={["/thoughts/financial-literacy"]}>
        <Routes>
          <Route path="/thoughts/:id" element={<Thought />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Financial Literacy")).toBeInTheDocument();
    expect(
      screen.getByText(/Many people want to accumulate wealth/i),
    ).toBeInTheDocument();
  });

  it("renders not found message when id is unknown", () => {
    render(
      <MemoryRouter initialEntries={["/thoughts/unknown-id"]}>
        <Routes>
          <Route path="/thoughts/:id" element={<Thought />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Thought not found")).toBeInTheDocument();
  });
});
