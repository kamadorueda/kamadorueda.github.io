import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/utils/tw";
import { link } from "~/utils/link";

export const ButtonLink: FC<
  PropsWithChildren & ClassNameProp & { ariaLabel?: string; onClick(): void }
> = (props) => (
  <button
    aria-label={props.ariaLabel}
    className={tw(link, props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
