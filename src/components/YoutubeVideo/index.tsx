import { FC, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { ClassNameProp, tw } from "~/utils/tw";
import { ButtonLink } from "~/components/Typography/ButtonLink";

type TimeRange = [minutes: number, seconds: number];
type YouTubePlayer = ReturnType<typeof YouTube>;

export interface YoutubeVideoProps extends ClassNameProp {
  endTime?: TimeRange;
  sectionLabel?: string;
  startTime?: TimeRange;
  videoId: string;
}

const timeToSeconds = ([minutes, seconds]: TimeRange): number => {
  return minutes * 60 + seconds;
};

export const YoutubeVideo: FC<YoutubeVideoProps> = ({
  className,
  endTime,
  sectionLabel = "Dance move video",
  startTime,
  videoId,
}) => {
  const playerRef = useRef<YouTubePlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.internalPlayer?.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.internalPlayer?.playVideo();
        setIsPlaying(true);
      }
    }
  };

  const handleReplay = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer?.seekTo(
        startTime ? timeToSeconds(startTime) : 0,
      );
      playerRef.current.internalPlayer?.playVideo();
      setIsPlaying(true);
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      iv_load_policy: 3,
      start: startTime ? timeToSeconds(startTime) : undefined,
      end: endTime ? timeToSeconds(endTime) : undefined,
    },
  };

  return (
    <section
      aria-label={sectionLabel}
      className={tw("mt-4 flex flex-col gap-2 items-center w-full", className)}
    >
      <div
        aria-label="Video player"
        aria-live="polite"
        className="w-full max-w-3xl"
        role="region"
      >
        <YouTube
          className="w-full overflow-hidden"
          opts={opts}
          ref={playerRef}
          style={{ aspectRatio: "16 / 9" }}
          videoId={videoId}
        />
      </div>
      <div aria-label="Video controls" className="flex gap-2 justify-center" role="group">
        <ButtonLink
          ariaLabel={isPlaying ? "Pause the video" : "Play the video"}
          onClick={handlePlayToggle}
        >
          {isPlaying ? "Pause" : "Play"}
        </ButtonLink>
        <ButtonLink
          ariaLabel="Replay from the start time"
          onClick={handleReplay}
        >
          Replay
        </ButtonLink>
      </div>
    </section>
  );
};
