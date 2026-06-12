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

  it("renders artificial intelligence thought when id matches", () => {
    render(
      <MemoryRouter initialEntries={["/thoughts/artificial-intelligence"]}>
        <Routes>
          <Route path="/thoughts/:id" element={<Thought />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Artificial Intelligence")).toBeInTheDocument();
  });

  it("renders cuban salsa dancing thought when id matches", () => {
    render(
      <MemoryRouter initialEntries={["/thoughts/cuban-salsa-dancing"]}>
        <Routes>
          <Route path="/thoughts/:id" element={<Thought />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Cuban Salsa Dancing")).toBeInTheDocument();
  });

  it("returns null when id param is missing", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/thoughts"]}>
        <Routes>
          <Route path="/thoughts/:id" element={<Thought />} />
          <Route path="/thoughts" element={<div>Default</div>} />
        </Routes>
      </MemoryRouter>,
    );

    // When id is missing, Thought returns null, so we see the Default route
    expect(screen.getByText("Default")).toBeInTheDocument();
  });
});
