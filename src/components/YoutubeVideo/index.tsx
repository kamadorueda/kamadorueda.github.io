import { FC, useState } from "react";
import { ClassNameProp, tw } from "~/utils/tw";
import { ButtonLink } from "~/components/Typography/ButtonLink";

type TimeRange = [minutes: number, seconds: number];

export interface YoutubeVideoProps extends ClassNameProp {
  endTime?: TimeRange;
  startTime?: TimeRange;
  title?: string;
  videoId: string;
}

const timeToSeconds = ([minutes, seconds]: TimeRange): number => {
  return minutes * 60 + seconds;
};

export const YoutubeVideo: FC<YoutubeVideoProps> = ({
  className,
  endTime,
  startTime,
  title = "Watch with music",
  videoId,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  let embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const params: string[] = [];
  if (startTime !== undefined) {
    params.push(`start=${timeToSeconds(startTime)}`);
  }
  if (endTime !== undefined) {
    params.push(`end=${timeToSeconds(endTime)}`);
  }
  if (params.length > 0) {
    embedUrl += `?${params.join("&")}`;
  }

  return (
    <div className={tw("", className)}>
      <ButtonLink onClick={handleToggle}>
        {isOpen ? "Hide video" : `🎥 ${title}`}
      </ButtonLink>

      {isOpen && (
        <div className="mt-4 flex justify-center">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded"
            height="315"
            src={embedUrl}
            title={title}
            width="560"
          />
        </div>
      )}
    </div>
  );
};
