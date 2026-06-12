import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { YoutubeVideo } from "./index";
import { vi } from "vitest";

// Store callbacks for testing
let capturedOnStateChange: ((event: { data: number }) => void) | null = null;

// Mock react-youtube
vi.mock("react-youtube", () => {
  return {
    default: vi.fn(({ onReady, onStateChange, videoId, ref }) => {
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
      // Store onStateChange callback for testing
      capturedOnStateChange = onStateChange;
      // Call onReady immediately to simulate video being ready
      if (onReady) {
        setTimeout(() => onReady(), 0);
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

  it("renders Play button initially", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      expect(screen.getByText("Play")).toBeInTheDocument();
    });
  });

  it("renders Highlight button", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      expect(screen.getByText("Highlight")).toBeInTheDocument();
    });
  });

  it("renders Slower button initially", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      expect(screen.getByText("Slower")).toBeInTheDocument();
    });
  });

  it("has correct aria labels for buttons", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      expect(screen.getByLabelText("Play the video")).toBeInTheDocument();
      expect(
        screen.getByLabelText("Play the highlighted section"),
      ).toBeInTheDocument();
      expect(screen.getByLabelText("Play at 0.5x speed")).toBeInTheDocument();
    });
  });

  it("renders section with correct aria-label", () => {
    render(<YoutubeVideo {...defaultProps} />);
    expect(screen.getByLabelText("Test Video")).toBeInTheDocument();
  });

  it("has three buttons in a grid layout", async () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      const buttonGrid = container.querySelector(".grid-cols-3");
      expect(buttonGrid).toBeInTheDocument();
      const buttons = buttonGrid?.querySelectorAll("button, a");
      expect(buttons?.length).toBe(3);
    });
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

  it("renders buttons with rounded corners (bl-3xl, br-3xl)", async () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      const buttons = container.querySelectorAll(
        ".grid-cols-3 button, .grid-cols-3 a",
      );

      expect(buttons[0]).toHaveClass("rounded-bl-3xl");
      expect(buttons[2]).toHaveClass("rounded-br-3xl");
    });
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

  it("has text-center styling on buttons", async () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      const buttons = container.querySelectorAll(
        ".grid-cols-3 button, .grid-cols-3 a",
      );
      buttons.forEach((button) => {
        expect(button).toHaveClass("text-center");
      });
    });
  });

  it("has no-underline styling on button links", async () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      const buttons = container.querySelectorAll(
        ".grid-cols-3 button, .grid-cols-3 a",
      );
      buttons.forEach((button) => {
        expect(button).toHaveClass("no-underline");
      });
    });
  });

  it("plays video when clicking play button", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      const playButton = screen.getByLabelText("Play the video");
      expect(playButton).toBeInTheDocument();
    });

    const playButton = screen.getByLabelText("Play the video");
    fireEvent.click(playButton);

    await waitFor(() => {
      expect(screen.getByText("Pause")).toBeInTheDocument();
    });
  });

  it("pauses video when clicking pause button", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      const playButton = screen.getByLabelText("Play the video");
      fireEvent.click(playButton);
    });

    await waitFor(() => {
      const pauseButton = screen.getByLabelText("Pause the video");
      expect(pauseButton).toBeInTheDocument();
      fireEvent.click(pauseButton);
    });

    await waitFor(() => {
      expect(screen.getByText("Play")).toBeInTheDocument();
    });
  });

  it("seeks to highlight and plays when clicking highlight button", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      expect(screen.getByText("Highlight")).toBeInTheDocument();
    });

    const highlightButton = screen.getByLabelText(
      "Play the highlighted section",
    );
    fireEvent.click(highlightButton);

    await waitFor(() => {
      expect(screen.getByText("Pause")).toBeInTheDocument();
    });
  });

  it("toggles playback speed when clicking slower button", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      const slowButton = screen.getByLabelText("Play at 0.5x speed");
      expect(slowButton).toBeInTheDocument();
    });

    const slowerButton = screen.getByLabelText("Play at 0.5x speed");
    fireEvent.click(slowerButton);

    await waitFor(() => {
      expect(screen.getByText("Faster")).toBeInTheDocument();
    });
  });

  it("toggles back to normal speed when clicking faster button", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      const slowerButton = screen.getByLabelText("Play at 0.5x speed");
      fireEvent.click(slowerButton);
    });

    await waitFor(() => {
      const fasterButton = screen.getByLabelText("Play at normal speed");
      expect(fasterButton).toBeInTheDocument();
      fireEvent.click(fasterButton);
    });

    await waitFor(() => {
      expect(screen.getByText("Slower")).toBeInTheDocument();
    });
  });

  it("updates button text based on youtube player state changes", async () => {
    render(<YoutubeVideo {...defaultProps} />);
    await waitFor(() => {
      expect(screen.getByText("Play")).toBeInTheDocument();
    });

    // Simulate youtube player playing state (state 1 = PLAYING)
    if (capturedOnStateChange) {
      capturedOnStateChange({ data: 1 });
    }

    await waitFor(() => {
      expect(screen.getByText("Pause")).toBeInTheDocument();
    });

    // Simulate youtube player paused state (state 2 = PAUSED)
    if (capturedOnStateChange) {
      capturedOnStateChange({ data: 2 });
    }

    await waitFor(() => {
      expect(screen.getByText("Play")).toBeInTheDocument();
    });
  });

  it("does not execute button handlers if player is not ready", async () => {
    const { container } = render(<YoutubeVideo {...defaultProps} />);

    // Initially shows loading state
    expect(screen.getByText("Loading")).toBeInTheDocument();

    // Verify no buttons are present yet
    const buttonGrid = container.querySelector(".grid-cols-3");
    expect(buttonGrid?.querySelector("button")).not.toBeInTheDocument();
  });
});
