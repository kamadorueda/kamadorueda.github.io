import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { Thoughts } from "./index";

vi.mock("react-helmet", () => ({
  Helmet: ({ children }: any) => <>{children}</>,
}));

describe("Thoughts", () => {
  it("displays thought list with heading and intro", () => {
    const { container } = render(
      <BrowserRouter>
        <Thoughts />
      </BrowserRouter>,
    );

    const heading = screen.getByRole("heading", { level: 1, name: "Thoughts" });
    const nav = container.querySelector("nav");

    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/collection of writings/i)).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });

  it("renders all thoughts as list items", () => {
    render(
      <BrowserRouter>
        <Thoughts />
      </BrowserRouter>,
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });

  it("displays minutes read for each thought", () => {
    render(
      <BrowserRouter>
        <Thoughts />
      </BrowserRouter>,
    );

    const minutesReadElements = screen.getAllByText(/minutes read/i);
    expect(minutesReadElements.length).toBeGreaterThan(0);
  });

  it("renders thought titles as clickable elements", () => {
    render(
      <BrowserRouter>
        <Thoughts />
      </BrowserRouter>,
    );

    const aiLink = screen.getByText("Artificial Intelligence.");
    const flLink = screen.getByText("Financial Literacy.");
    expect(aiLink).toBeInTheDocument();
    expect(flLink).toBeInTheDocument();
  });

  it("navigates to thought detail when clicking on a thought", () => {
    render(
      <MemoryRouter initialEntries={["/thoughts"]}>
        <Routes>
          <Route path="/thoughts" element={<Thoughts />} />
          <Route
            path="/thoughts/:id"
            element={<div data-testid="thought-detail">Thought Detail</div>}
          />
        </Routes>
      </MemoryRouter>,
    );

    const financialLiteracyLink = screen.getByText("Financial Literacy.");
    fireEvent.click(financialLiteracyLink);

    expect(screen.getByTestId("thought-detail")).toBeInTheDocument();
  });
});
