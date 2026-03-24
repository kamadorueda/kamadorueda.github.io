import { FC, PropsWithChildren } from "react";
// @ts-expect-error - React Router v7 type resolution issue
import { Link } from "react-router-dom";
import { ClassNameProp, tw } from "~/utils/tw";
import { link } from "~/utils/link";

export const InternalLink: FC<
  PropsWithChildren & ClassNameProp & { to: string }
> = (props) => (
  <Link className={tw(link, props.className)} to={props.to}>
    {props.children}
  </Link>
);
