import { FC, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { ClassNameProp, tw } from "~/utils/tw";
import { ButtonLink } from "~/components/Typography/ButtonLink";

type TimeRange = [minutes: number, seconds: number];
type YouTubePlayer = InstanceType<typeof YouTube>;

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

  const handleReplay = () => {
    if (playerRef.current?.internalPlayer) {
      playerRef.current.internalPlayer.seekTo(
        startTime ? timeToSeconds(startTime) : 0,
      );
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

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      disablekb: 1,
      playsinline: 1,
      rel: 0,
      iv_load_policy: 3,
      start: startTime ? timeToSeconds(startTime) : undefined,
      end: endTime ? timeToSeconds(endTime) : undefined,
    },
  };

  return (
    <section
      aria-label={sectionLabel}
      className={tw("mt-4 flex w-full flex-col items-center", className)}
    >
      <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-lg">
        <div aria-live="polite" role="region">
          <YouTube
            className="w-full overflow-hidden"
            opts={opts}
            ref={playerRef}
            style={{ aspectRatio: "16 / 9" }}
            videoId={videoId}
          />
        </div>
        <div className="border-coutline grid w-full grid-flow-col items-center rounded-b-3xl border">
          <ButtonLink
            ariaLabel={isPlaying ? "Pause the video" : "Play the video"}
            className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer rounded-bl-3xl py-2 pr-2 pl-4 no-underline focus-visible:rounded-bl-3xl focus-visible:outline focus-visible:outline-1"
            onClick={handlePlayToggle}
          >
            {isPlaying ? "Pause" : "Play"}
          </ButtonLink>
          <ButtonLink
            ariaLabel="Replay from the start time"
            className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer px-2 py-2 no-underline focus-visible:outline focus-visible:outline-1"
            onClick={handleReplay}
          >
            Replay
          </ButtonLink>
          <ButtonLink
            ariaLabel={isSlowed ? "Play at normal speed" : "Play at 0.5x speed"}
            className="hover:bg-cbg hover:text-ctextdark focus-visible:outline-cfocus cursor-pointer rounded-br-3xl py-2 pr-4 pl-2 no-underline focus-visible:rounded-br-3xl focus-visible:outline focus-visible:outline-1"
            onClick={handleSpeed}
          >
            {isSlowed ? "Faster" : "Slower"}
          </ButtonLink>
        </div>
        <div className="h-2" />
      </div>
    </section>
  );
};
