import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ClassNameProp, tw } from "~/tw";

export const Header: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <h1
    className={tw(
      "text-center text-xl font-bold text-slate-900",
      props.className,
    )}
  >
    {props.children}
  </h1>
);

export const Paragraph: FC<PropsWithChildren> = (props) => (
  <p className="mt-4 text-slate-600">{props.children}</p>
);

const link = tw(
  "text-slate-600 underline underline-offset-2 transition",
  // Focus
  "focus-visible:text-blue-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500",
  // Hover
  "hover:text-slate-900",
);

export const InternalLink: FC<PropsWithChildren & { to: string }> = (props) => (
  <Link className={link} to={props.to}>
    {props.children}
  </Link>
);

export const ExternalLink: FC<PropsWithChildren & { to: string }> = (props) => (
  <a className={link} href={props.to} rel="noopener noreferrer" target="_blank">
    {props.children}
  </a>
);

export const UnorderedList: FC<PropsWithChildren> = (props) => (
  <ul className="ml-8 mt-4 list-outside list-disc marker:text-slate-600">
    {props.children}
  </ul>
);

export const OrderedList: FC<PropsWithChildren> = (props) => (
  <ol className="ml-8 mt-4 list-outside list-disc marker:text-slate-600">
    {props.children}
  </ol>
);

export const ListItem: FC<PropsWithChildren> = (props) => (
  <li className="text-slate-600">{props.children}</li>
);
