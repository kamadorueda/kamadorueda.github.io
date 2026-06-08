import { FC, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { ClassNameProp, tw } from "~/utils/tw";
import { ButtonLink } from "~/components/Typography/ButtonLink";

type TimeRange = [minutes: number, seconds: number];
type YouTubePlayer = InstanceType<typeof YouTube>;

enum YouTubePlayerState {
  UNSTARTED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5,
}

export interface YoutubeVideoProps extends ClassNameProp {
  highlight?: { from: TimeRange; to: TimeRange };
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
  const playerRef = useRef<YouTubePlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSlowed, setIsSlowed] = useState(false);

  const handlePlayToggle = () => {
    if (playerRef.current?.internalPlayer) {
      if (isPlaying) {
        playerRef.current.internalPlayer.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.internalPlayer.playVideo();
        setIsPlaying(true);
      }
    }
  };

  const handleHighlight = () => {
    if (playerRef.current?.internalPlayer && highlight) {
      playerRef.current.internalPlayer.seekTo(timeToSeconds(highlight.from));
      playerRef.current.internalPlayer.playVideo();
      setIsPlaying(true);
    }
  };

  const handleSpeed = () => {
    if (playerRef.current?.internalPlayer) {
      if (isSlowed) {
        playerRef.current.internalPlayer.setPlaybackRate(1);
        setIsSlowed(false);
      } else {
        playerRef.current.internalPlayer.setPlaybackRate(0.5);
        setIsSlowed(true);
      }
    }
  };

  const handleStateChange = (event: { data: number }) => {
    const state = event.data as YouTubePlayerState;
    if (
      state === YouTubePlayerState.UNSTARTED ||
      state === YouTubePlayerState.PAUSED
    ) {
      setIsPlaying(false);
    } else if (state === YouTubePlayerState.PLAYING) {
      setIsPlaying(true);
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      disablekb: 1,
      playsinline: 1,
      quality: "default",
      rel: 0,
      iv_load_policy: 3,
      start: highlight ? timeToSeconds(highlight.from) : undefined,
      end: highlight ? timeToSeconds(highlight.to) : undefined,
    },
  };

  return (
    <section
      aria-label={sectionLabel}
      className={tw("mt-4 flex w-full flex-col items-center", className)}
    >
      <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-lg">
        <div
          aria-live="polite"
          role="region"
          className="bg-black"
          style={{ aspectRatio: "16 / 9" }}
        >
          <YouTube
            className="w-full overflow-hidden"
            onStateChange={handleStateChange}
            opts={opts}
            ref={playerRef}
            style={{ aspectRatio: "16 / 9" }}
            videoId={videoId}
          />
        </div>
        <div className="border-coutline grid w-full grid-cols-3 items-center rounded-b-3xl border">
          <ButtonLink
            ariaLabel={isPlaying ? "Pause the video" : "Play the video"}
            className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer rounded-bl-3xl py-2 text-center no-underline focus-visible:rounded-bl-3xl focus-visible:outline focus-visible:outline-1"
            onClick={handlePlayToggle}
          >
            {isPlaying ? "Pause" : "Play"}
          </ButtonLink>
          {highlight && (
            <ButtonLink
              ariaLabel="Play the highlighted section"
              className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer py-2 text-center no-underline focus-visible:outline focus-visible:outline-1"
              onClick={handleHighlight}
            >
              Highlight
            </ButtonLink>
          )}
          <ButtonLink
            ariaLabel={isSlowed ? "Play at normal speed" : "Play at 0.5x speed"}
            className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer rounded-br-3xl py-2 text-center no-underline focus-visible:rounded-br-3xl focus-visible:outline focus-visible:outline-1"
            onClick={handleSpeed}
          >
            {isSlowed ? "Faster" : "Slower"}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
