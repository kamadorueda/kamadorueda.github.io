import { FC } from "react";

export const Time: FC<{ dateTime: string; className?: string }> = (props) => (
  <time className={props.className} dateTime={props.dateTime}>
    {new Date(props.dateTime).toISOString().slice(0, 10)}
  </time>
);
