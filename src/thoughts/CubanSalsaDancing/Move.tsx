import React, { FC, PropsWithChildren } from "react";
import { YoutubeVideo } from "~/components/YoutubeVideo";
import { ExternalLink } from "~/components/Typography/ExternalLink";
import { Paragraph } from "~/components/Typography/Paragraph";

type TimeRange = [minutes: number, seconds: number];

interface MoveContextType {
  name: string;
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
}

const MoveRoot: FC<MoveProps> = ({ name, children }) => (
  <MoveContext.Provider value={{ name }}>
    <>{children}</>
  </MoveContext.Provider>
);

interface MoveDescriptionProps extends PropsWithChildren {
  videoId?: string;
}

const MoveDescription: FC<MoveDescriptionProps> = ({ children, videoId }) => {
  const { name } = useMoveContext();
  const youtubeUrl = videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : undefined;

  return (
    <Paragraph>
      {videoId ? (
        <ExternalLink to={youtubeUrl!}>{name}</ExternalLink>
      ) : (
        <span>{name}</span>
      )}
      : {children}
    </Paragraph>
  );
};

interface MoveVideoProps {
  id: string;
  highlight?: { from: TimeRange; to: TimeRange };
}

const MoveVideoComponent: FC<MoveVideoProps> = ({ id, highlight }) => {
  const { name } = useMoveContext();

  if (!highlight) {
    return null;
  }

  return (
    <YoutubeVideo
      highlight={highlight}
      sectionLabel={`${name} video demonstration`}
      videoId={id}
    />
  );
};

export const Move = Object.assign(MoveRoot, {
  Description: MoveDescription,
  Video: MoveVideoComponent,
});
