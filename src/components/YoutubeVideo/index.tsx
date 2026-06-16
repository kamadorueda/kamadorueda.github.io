/* eslint-disable @typescript-eslint/no-explicit-any, no-undef */
import { FC, useEffect, useId, useRef, useState } from "react";
import { ClassNameProp, tw } from "~/utils/tw";
import { ButtonGroup } from "~/components/Typography/ButtonGroup";
import { ButtonLink } from "~/components/Typography/ButtonLink";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
    youtubeReadyCallbacks?: (() => void)[];
  }
}

type TimeRange = [minutes: number, seconds: number];

export interface YoutubeVideoProps extends ClassNameProp {
  highlight: { from: TimeRange; to: TimeRange };
  sectionLabel: string;
  videoId: string;
}

const timeToSeconds = ([minutes, seconds]: TimeRange): number => {
  return minutes * 60 + seconds;
};

export const YoutubeVideo: FC<YoutubeVideoProps> = ({
  className,
  highlight,
  sectionLabel,
  videoId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSlowed, setIsSlowed] = useState(false);
  const containerId = useId();

  useEffect(() => {
    const initPlayer = () => {
      if (window.YT?.Player && containerRef.current && !playerRef.current) {
        playerRef.current = new window.YT.Player(containerId, {
          videoId,
          events: {
            onReady: () => {
              setIsLoading(false);
            },
            onStateChange: (event: any) => {
              if (event.data === 1) setIsPlaying(true);
              else if (event.data === 2) setIsPlaying(false);
            },
          },
        });
      }
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      if (!window.youtubeReadyCallbacks) {
        window.youtubeReadyCallbacks = [];
        window.onYouTubeIframeAPIReady = () => {
          window.youtubeReadyCallbacks?.forEach((cb) => cb());
        };
      }
      window.youtubeReadyCallbacks.push(initPlayer);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy?.();
        playerRef.current = null;
      }
    };
  }, [containerId, videoId]);

  const handlePlayToggle = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const handleHighlight = () => {
    if (!playerRef.current) return;
    playerRef.current.seekTo(timeToSeconds(highlight.from));
    playerRef.current.playVideo();
    setIsPlaying(true);
  };

  const handleSpeed = () => {
    if (!playerRef.current) return;
    if (isSlowed) {
      playerRef.current.setPlaybackRate(1);
      setIsSlowed(false);
    } else {
      playerRef.current.setPlaybackRate(0.5);
      setIsSlowed(true);
    }
  };

  return (
    <section
      aria-label={sectionLabel}
      className={tw("mt-4 flex w-full flex-col items-center", className)}
    >
      <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-3xl">
        <div
          aria-live="polite"
          className="w-full bg-black"
          id={containerId}
          ref={containerRef}
          role="region"
          style={{ aspectRatio: "16 / 9" }}
        />
        <ButtonGroup className="grid-cols-3" variant="bottomRounded">
          {isLoading ? (
            <span className="text-ctext col-span-3 py-2 text-center">
              Loading
            </span>
          ) : (
            <>
              <ButtonLink
                ariaLabel={isPlaying ? "Pause the video" : "Play the video"}
                className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer rounded-bl-3xl py-2 text-center no-underline focus-visible:rounded-bl-3xl focus-visible:outline focus-visible:outline-1"
                onClick={handlePlayToggle}
              >
                {isPlaying ? "Pause" : "Play"}
              </ButtonLink>
              <ButtonLink
                ariaLabel="Play the highlighted section"
                className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer py-2 text-center no-underline focus-visible:outline focus-visible:outline-1"
                onClick={handleHighlight}
              >
                Highlight
              </ButtonLink>
              <ButtonLink
                ariaLabel={
                  isSlowed ? "Play at normal speed" : "Play at 0.5x speed"
                }
                className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer rounded-br-3xl py-2 text-center no-underline focus-visible:rounded-br-3xl focus-visible:outline focus-visible:outline-1"
                onClick={handleSpeed}
              >
                {isSlowed ? "Faster" : "Slower"}
              </ButtonLink>
            </>
          )}
        </ButtonGroup>
      </div>
    </section>
  );
};
