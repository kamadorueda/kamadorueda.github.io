import React, { FC, PropsWithChildren } from "react";
import { YoutubeVideo } from "~/components/YoutubeVideo";
import { ExternalLink } from "~/components/Typography/ExternalLink";
import { Paragraph } from "~/components/Typography/Paragraph";

type TimeRange = [minutes: number, seconds: number];

interface MoveContextType {
  name: string;
  hasVideo?: boolean;
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
  videoId?: string;
}

const MoveRoot: FC<MoveProps> = ({ name, videoId, children }) => (
  <MoveContext.Provider value={{ name, hasVideo: !!videoId }}>
    {React.Children.map(children, (child) =>
      React.isValidElement(child) && videoId
        ? React.cloneElement(child, { videoId } as Record<string, unknown>)
        : child,
    )}
  </MoveContext.Provider>
);

interface MoveDescriptionProps extends PropsWithChildren {
  videoId?: string;
}

const MoveDescription: FC<MoveDescriptionProps> = ({ children, videoId }) => {
  const { name, hasVideo } = useMoveContext();
  const youtubeUrl =
    videoId && !hasVideo
      ? `https://www.youtube.com/watch?v=${videoId}`
      : undefined;

  return (
    <Paragraph>
      {youtubeUrl ? (
        <ExternalLink to={youtubeUrl}>{name}</ExternalLink>
      ) : (
        <span>{name}</span>
      )}
      : {children}
    </Paragraph>
  );
};

interface MoveVideoProps {
  highlight?: { from: TimeRange; to: TimeRange };
  videoId?: string;
}

const MoveVideoComponent: FC<MoveVideoProps> = ({ highlight, videoId }) => {
  const { name } = useMoveContext();

  if (!highlight || !videoId) {
    return null;
  }

  return (
    <YoutubeVideo
      highlight={highlight}
      sectionLabel={`${name} video demonstration`}
      videoId={videoId}
    />
  );
};

export const Move = Object.assign(MoveRoot, {
  Description: MoveDescription,
  Video: MoveVideoComponent,
});
