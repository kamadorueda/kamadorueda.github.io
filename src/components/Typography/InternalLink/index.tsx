import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/utils/tw";
import { link } from "~/utils/link";

export const InternalLink: FC<
  PropsWithChildren & ClassNameProp & { to: string }
> = (props) => (
  <a className={tw(link, props.className)} href={props.to}>
    {props.children}
  </a>
);
