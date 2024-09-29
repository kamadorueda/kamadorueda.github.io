import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/tw";

export const Main: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <main className={tw("mt-24", props.className)}>{props.children}</main>
);
