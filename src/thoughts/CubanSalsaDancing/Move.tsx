import React, { FC } from "react";
import { YoutubeVideo, YoutubeVideoProps } from "~/components/YoutubeVideo";
import { ExternalLink } from "~/components/Typography/ExternalLink";
import { Paragraph } from "~/components/Typography/Paragraph";

interface MoveProps {
  name: string;
  videoId?: string;
  description: React.ReactElement;
  video?: Omit<YoutubeVideoProps, "sectionLabel" | "videoId">;
}

export const Move: FC<MoveProps> = ({ name, videoId, description, video }) => {
  const youtubeUrl = videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : undefined;
  const hasInlineVideo = video && videoId;

  return (
    <>
      <Paragraph>
        {hasInlineVideo ? (
          <span>{name}</span>
        ) : (
          <ExternalLink to={youtubeUrl!}>{name}</ExternalLink>
        )}
        : {description}
      </Paragraph>
      {hasInlineVideo && (
        <YoutubeVideo
          sectionLabel={`${name} video demonstration`}
          videoId={videoId}
          {...video}
        />
      )}
    </>
  );
};
