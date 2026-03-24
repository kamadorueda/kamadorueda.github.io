import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/tw";

export const Header: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <h1
    className={tw(
      "text-ctextdark text-center text-xl font-bold",
      props.className,
    )}
  >
    {props.children}
  </h1>
);
