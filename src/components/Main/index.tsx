import { FC, PropsWithChildren } from "react";
import { tw } from "~/tw";

export const Main: FC<PropsWithChildren & { className?: string }> = (props) => (
  <main className={tw("mt-24", props.className)}>{props.children}</main>
);
