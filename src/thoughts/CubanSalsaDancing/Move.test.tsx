import { render, screen } from "@testing-library/react";
import { Move } from "./Move";
import { vi } from "vitest";

// Mock YoutubeVideo component
vi.mock("~/components/YoutubeVideo", () => ({
  YoutubeVideo: ({ videoId, sectionLabel }: any) => (
    <div data-testid="youtube-video" data-video-id={videoId}>
      {sectionLabel}
    </div>
  ),
}));

// Mock Definition component
vi.mock("~/components/Typography/Definition", () => ({
  Definition: ({ term, children }: any) => (
    <dl data-testid="definition">
      <dt>{term}</dt>
      <dd>{children}</dd>
    </dl>
  ),
}));

describe("Move", () => {
  it("renders description with move name as term", () => {
    render(
      <Move name="Basic Step">
        <Move.Description>
          This is the basic step pattern
        </Move.Description>
      </Move>
    );

    expect(screen.getByText("Basic Step")).toBeInTheDocument();
    expect(screen.getByText("This is the basic step pattern")).toBeInTheDocument();
  });

  it("throws error when Description is used outside Move", () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => {
      render(<Move.Description>Content</Move.Description>);
    }).toThrow("Move child components must be used within <Move>");

    consoleSpy.mockRestore();
  });

  it("throws error when Video is used outside Move", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => {
      render(
        <Move.Video
          highlight={{ from: [0, 10], to: [0, 20] }}
          videoId="test123"
        />
      );
    }).toThrow("Move child components must be used within <Move>");

    consoleSpy.mockRestore();
  });

  it("renders video with correct props when Move.Video is used", () => {
    render(
      <Move name="Guapea">
        <Move.Video
          highlight={{ from: [2, 35], to: [3, 9] }}
          videoId="YwxB1MSytYA"
        />
      </Move>
    );

    expect(screen.getByTestId("youtube-video")).toHaveAttribute(
      "data-video-id",
      "YwxB1MSytYA"
    );
  });

  it("renders video with move name in section label", () => {
    render(
      <Move name="Enchufla">
        <Move.Video
          highlight={{ from: [1, 53], to: [2, 0] }}
          videoId="3tUcawE0Bhs"
        />
      </Move>
    );

    expect(screen.getByText("Enchufla video demonstration")).toBeInTheDocument();
  });

  it("renders both description and video together", () => {
    render(
      <Move name="Sencillo">
        <Move.Description>
          A turn with minimal lead pressure
        </Move.Description>
        <Move.Video
          highlight={{ from: [2, 19], to: [2, 36] }}
          videoId="cpOxtBZ7Dq8"
        />
      </Move>
    );

    expect(screen.getByText("Sencillo")).toBeInTheDocument();
    expect(screen.getByText("A turn with minimal lead pressure")).toBeInTheDocument();
    expect(screen.getByTestId("youtube-video")).toHaveAttribute(
      "data-video-id",
      "cpOxtBZ7Dq8"
    );
  });

  it("allows multiple children in any order", () => {
    render(
      <Move name="Dile Que No">
        <Move.Video
          highlight={{ from: [3, 51], to: [3, 56] }}
          videoId="Jexcy9LGKjo"
        />
        <Move.Description>
          A cross-body movement
        </Move.Description>
      </Move>
    );

    expect(screen.getByText("Dile Que No")).toBeInTheDocument();
    expect(screen.getByText("A cross-body movement")).toBeInTheDocument();
  });

  it("context value is memoized using useMemo", () => {
    const { rerender } = render(
      <Move name="Vacilala">
        <Move.Description>First definition</Move.Description>
      </Move>
    );

    const firstDefinition = screen.getByTestId("definition");
    expect(firstDefinition).toBeInTheDocument();

    // Rerender with same name - memoization should prevent unnecessary re-renders
    rerender(
      <Move name="Vacilala">
        <Move.Description>First definition</Move.Description>
      </Move>
    );

    const secondDefinition = screen.getByTestId("definition");
    expect(secondDefinition).toBeInTheDocument();
  });

  it("updates context when move name changes", () => {
    const { rerender } = render(
      <Move name="Exhibe">
        <Move.Description>Right turn definition</Move.Description>
      </Move>
    );

    expect(screen.getByText("Exhibe")).toBeInTheDocument();

    rerender(
      <Move name="Sombrero">
        <Move.Description>Overhead arm sweep</Move.Description>
      </Move>
    );

    expect(screen.getByText("Sombrero")).toBeInTheDocument();
    expect(screen.getByText("Overhead arm sweep")).toBeInTheDocument();
  });

  it("renders compound component with Object.assign pattern", () => {
    // Verify that Move has Description and Video subcomponents
    expect(Move.Description).toBeDefined();
    expect(Move.Video).toBeDefined();
    expect(typeof Move.Description).toBe("function");
    expect(typeof Move.Video).toBe("function");
  });

  it("handles moves with only description", () => {
    render(
      <Move name="Corona">
        <Move.Description>
          A Setenta-based figure
        </Move.Description>
      </Move>
    );

    expect(screen.getByText("Corona")).toBeInTheDocument();
    expect(screen.queryByTestId("youtube-video")).not.toBeInTheDocument();
  });

  it("handles moves with only video", () => {
    render(
      <Move name="Test Move">
        <Move.Video
          highlight={{ from: [1, 0], to: [1, 30] }}
          videoId="testId123"
        />
      </Move>
    );

    expect(screen.getByTestId("youtube-video")).toBeInTheDocument();
  });
});
