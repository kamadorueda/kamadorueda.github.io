import React, { FC, PropsWithChildren } from "react";
import { YoutubeVideo } from "~/components/YoutubeVideo";
import { ExternalLink } from "~/components/Typography/ExternalLink";
import { Paragraph } from "~/components/Typography/Paragraph";

type TimeRange = [minutes: number, seconds: number];

interface MoveContextType {
  name: string;
  videoId?: string;
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
  <MoveContext.Provider value={{ name, videoId }}>
    <>{children}</>
  </MoveContext.Provider>
);

interface MoveDescriptionProps extends PropsWithChildren {
  videoId?: string;
}

const MoveDescription: FC<MoveDescriptionProps> = ({
  children,
  videoId: propVideoId,
}) => {
  const { name, videoId: contextVideoId } = useMoveContext();
  const id = propVideoId || contextVideoId;
  const youtubeUrl = id ? `https://www.youtube.com/watch?v=${id}` : undefined;

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
}

const MoveVideoComponent: FC<MoveVideoProps> = ({ highlight }) => {
  const { name, videoId } = useMoveContext();

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
