import { FC, PropsWithChildren } from "react";
import { tw } from "~/tw";

export const Paragraph: FC<PropsWithChildren> = (props) => (
  <p className="mt-4 text-slate-500">{props.children}</p>
);

export const ExternalLink: FC<PropsWithChildren & { to: string }> = (props) => (
  <a
    className={tw(
      "text-slate-500 underline underline-offset-2 transition",
      // Focus
      "focus-visible:text-blue-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500",
      // Hover
      "hover:text-slate-900",
    )}
    href={props.to}
    rel="noopener noreferrer"
    target="_blank"
  >
    {props.children}
  </a>
);

export const UnorderedList: FC<PropsWithChildren> = (props) => (
  <ul className="ml-8 mt-4 list-outside list-disc marker:text-slate-500">
    {props.children}
  </ul>
);

export const OrderedList: FC<PropsWithChildren> = (props) => (
  <ol className="ml-8 mt-4 list-outside list-disc marker:text-slate-500">
    {props.children}
  </ol>
);

export const ListItem: FC<PropsWithChildren> = (props) => (
  <li className="text-slate-500">{props.children}</li>
);
