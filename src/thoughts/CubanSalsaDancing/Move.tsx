import React, { FC, PropsWithChildren } from "react";
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

const MoveRoot: FC<MoveProps> = ({ name, children }) => (
  <MoveContext.Provider value={{ name }}>{children}</MoveContext.Provider>
);

const MoveDescription: FC<PropsWithChildren> = ({ children }) => {
  const { name } = useMoveContext();

  return <Definition term={name}>{children}</Definition>;
};

interface MoveVideoProps {
  highlight: { from: TimeRange; to: TimeRange };
  videoId: string;
}

const MoveVideoComponent: FC<MoveVideoProps> = ({ highlight, videoId }) => {
  const { name } = useMoveContext();

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
