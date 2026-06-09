import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { YoutubeVideo } from "./index";
import { vi } from "vitest";

// Mock react-youtube
vi.mock("react-youtube", () => {
  const actual = vi.importActual("react-youtube");
  return {
    default: vi.fn(({ opts, onStateChange, videoId, ref }) => {
      if (ref) {
        ref.current = {
          internalPlayer: {
            playVideo: vi.fn(),
            pauseVideo: vi.fn(),
            seekTo: vi.fn(),
            setPlaybackRate: vi.fn(),
          },
        };
      }
      return <div data-testid="youtube-iframe" data-video-id={videoId} />;
    }),
  };
});

describe("YoutubeVideo", () => {
  const defaultProps = {
    highlight: { from: [2, 19], to: [2, 36] },
    sectionLabel: "Test Video",
    videoId: "test123",
  };

  it("renders video player with correct video ID", () => {
    render(<YoutubeVideo {...defaultProps} />);
    expect(screen.getByTestId("youtube-iframe")).toHaveAttribute(
      "data-video-id",
      "test123",
    );
  });

  it("renders Play button initially", () => {
    render(<YoutubeVideo {...defaultProps} />);
    expect(screen.getByText("Play")).toBeInTheDocument();
  });

  it("renders Highlight button", () => {
    render(<YoutubeVideo {...defaultProps} />);
    expect(screen.getByText("Highlight")).toBeInTheDocument();
  });

  it("renders Slower button initially", () => {
    render(<YoutubeVideo {...defaultProps} />);
    expect(screen.getByText("Slower")).toBeInTheDocument();
  });

  it("has correct aria labels for buttons", () => {
    render(<YoutubeVideo {...defaultProps} />);
    expect(screen.getByLabelText("Play the video")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Play the highlighted section"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Play at 0.5x speed")).toBeInTheDocument();
  });

  it("renders section with correct aria-label", () => {
    render(<YoutubeVideo {...defaultProps} />);
    expect(screen.getByLabelText("Test Video")).toBeInTheDocument();
  });

  it("has three buttons in a grid layout", () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    const buttonGrid = container.querySelector(".grid-cols-3");
    expect(buttonGrid).toBeInTheDocument();
    const buttons = buttonGrid?.querySelectorAll("button, a");
    expect(buttons?.length).toBe(3);
  });

  it("applies max-w-3xl to video container", () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    const videoContainer = container.querySelector(".max-w-3xl");
    expect(videoContainer).toBeInTheDocument();
  });

  it("has black background for video area", () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    const bgBlack = container.querySelector(".bg-black");
    expect(bgBlack).toBeInTheDocument();
  });

  it("has 16/9 aspect ratio for video", () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    const videoArea = container.querySelector(".bg-black");
    expect(videoArea).toHaveStyle({ aspectRatio: "16 / 9" });
  });

  it("renders buttons with rounded corners (bl-3xl, br-3xl)", () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    const buttons = container.querySelectorAll(
      ".grid-cols-3 button, .grid-cols-3 a",
    );

    expect(buttons[0]).toHaveClass("rounded-bl-3xl");
    expect(buttons[2]).toHaveClass("rounded-br-3xl");
  });

  it("has border on button container", () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    const buttonContainer = container.querySelector(".border-coutline");
    expect(buttonContainer).toHaveClass("border");
  });

  it("applies custom className when provided", () => {
    const { container } = render(
      <YoutubeVideo {...defaultProps} className="custom-class" />,
    );
    const section = container.querySelector("section");
    expect(section).toHaveClass("custom-class");
  });

  it("has text-center styling on buttons", () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    const buttons = container.querySelectorAll(
      ".grid-cols-3 button, .grid-cols-3 a",
    );
    buttons.forEach((button) => {
      expect(button).toHaveClass("text-center");
    });
  });

  it("has no-underline styling on button links", () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    const buttons = container.querySelectorAll(
      ".grid-cols-3 button, .grid-cols-3 a",
    );
    buttons.forEach((button) => {
      expect(button).toHaveClass("no-underline");
    });
  });
});
