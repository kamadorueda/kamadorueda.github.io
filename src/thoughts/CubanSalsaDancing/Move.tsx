import React, { FC, PropsWithChildren } from "react";
import { YoutubeVideo } from "~/components/YoutubeVideo";
import { ExternalLink } from "~/components/Typography/ExternalLink";
import { Paragraph } from "~/components/Typography/Paragraph";

type TimeRange = [minutes: number, seconds: number];

interface MoveVideo {
  id: string;
  startTime?: TimeRange;
  endTime?: TimeRange;
}

interface MoveContextType {
  name: string;
  video?: MoveVideo;
}

const MoveContext = React.createContext<MoveContextType | undefined>(undefined);

const useMoveContext = () => {
  const context = React.useContext(MoveContext);
  if (!context) {
    throw new Error("Move child components must be used within <Move>");
  }
  return context;
};

interface MoveProps extends PropsWithChildren {
  name: string;
  video?: MoveVideo;
}

const MoveRoot: FC<MoveProps> = ({ name, video, children }) => (
  <MoveContext.Provider value={{ name, video }}>
    <>{children}</>
  </MoveContext.Provider>
);

const MoveDescription: FC<PropsWithChildren> = ({ children }) => {
  const { name, video } = useMoveContext();
  const youtubeUrl = video
    ? `https://www.youtube.com/watch?v=${video.id}`
    : undefined;
  const hasInlineVideo = video && video.startTime && video.endTime;

  return (
    <>
      <Paragraph>
        {hasInlineVideo ? (
          <span>{name}</span>
        ) : (
          <ExternalLink to={youtubeUrl!}>{name}</ExternalLink>
        )}
        : {children}
      </Paragraph>
      {hasInlineVideo && (
        <YoutubeVideo
          endTime={video!.endTime}
          sectionLabel={`${name} video demonstration`}
          startTime={video!.startTime}
          videoId={video!.id}
        />
      )}
    </>
  );
};

export const Move = Object.assign(MoveRoot, {
  Description: MoveDescription,
});
