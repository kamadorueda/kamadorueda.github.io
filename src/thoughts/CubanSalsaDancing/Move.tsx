import React, { FC, PropsWithChildren, useMemo } from "react";
import { YoutubeVideo } from "~/components/YoutubeVideo";
import { Definition } from "~/components/Typography/Definition";

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

const MoveRoot: FC<MoveProps> = ({ name, children }) => {
  const contextValue = useMemo(() => ({ name }), [name]);

  return (
    <MoveContext.Provider value={contextValue}>{children}</MoveContext.Provider>
  );
};

const MoveDescription: FC<PropsWithChildren> = ({ children }) => {
  const { name } = useMoveContext();
  return <Definition term={name}>{children}</Definition>;
};

interface MoveVideoProps {
  highlight: { from: TimeRange; to: TimeRange };
  videoId: string;
}

const MoveVideo: FC<MoveVideoProps> = ({ highlight, videoId }) => {
  const { name } = useMoveContext();
  return (
    <YoutubeVideo
      highlight={highlight}
      sectionLabel={`${name} video demonstration`}
      videoId={videoId}
    />
  );
};

interface MoveComponent extends FC<MoveProps> {
  Description: FC<PropsWithChildren>;
  Video: FC<MoveVideoProps>;
}

const Move = MoveRoot as MoveComponent;
Move.Description = MoveDescription;
Move.Video = MoveVideo;

export { Move };
