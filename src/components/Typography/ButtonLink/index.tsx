import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/tw";
import { link } from "~/link";

export const ButtonLink: FC<
  PropsWithChildren & ClassNameProp & { onClick(): void }
> = (props) => (
  <button className={tw(link, props.className)} onClick={props.onClick}>
    {props.children}
  </button>
);
