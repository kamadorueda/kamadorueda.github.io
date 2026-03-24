import { FC, PropsWithChildren } from "react";

export const ListItem: FC<PropsWithChildren> = (props) => (
  <li>{props.children}</li>
);
