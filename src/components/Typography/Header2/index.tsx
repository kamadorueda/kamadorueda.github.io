import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/tw";

export const Header2: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <h2 className={tw("text-ctextdark mt-16 text-lg font-bold", props.className)}>
    {props.children}
  </h2>
);
