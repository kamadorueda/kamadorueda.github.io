import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ClassNameProp, tw } from "~/tw";

export const Header: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <h1
    className={tw(
      "text-center text-xl font-bold text-ctextdark",
      props.className,
    )}
  >
    {props.children}
  </h1>
);

export const Header2: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <h2 className={tw("mt-16 text-lg font-bold text-ctextdark", props.className)}>
    {props.children}
  </h2>
);

export const Paragraph: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <p className={tw("mt-4 text-ctext", props.className)}>{props.children}</p>
);

const link = tw(
  "cunderline text-ctext transition",
  "cfocus-visible",
  "chover-bg",
);

export const ButtonLink: FC<
  PropsWithChildren & ClassNameProp & { onClick(): void }
> = (props) => (
  <button className={tw(link, props.className)} onClick={props.onClick}>
    {props.children}
  </button>
);

export const InternalLink: FC<
  PropsWithChildren & ClassNameProp & { to: string }
> = (props) => (
  <Link className={tw(link, props.className)} to={props.to}>
    {props.children}
  </Link>
);

export const ExternalLink: FC<
  PropsWithChildren & ClassNameProp & { to: string }
> = (props) => (
  <a
    className={tw(link, props.className)}
    href={props.to}
    rel="noopener noreferrer"
    target="_blank"
  >
    {props.children}
  </a>
);

export const UnorderedList: FC<PropsWithChildren> = (props) => (
  <ul className="ml-8 mt-4 list-outside list-disc space-y-1 marker:text-ctext">
    {props.children}
  </ul>
);

export const OrderedList: FC<PropsWithChildren> = (props) => (
  <ol className="ml-8 mt-4 list-outside list-disc space-y-1 marker:text-ctext">
    {props.children}
  </ol>
);

export const ListItem: FC<PropsWithChildren> = (props) => (
  <li>{props.children}</li>
);
