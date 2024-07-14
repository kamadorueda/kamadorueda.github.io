import { FC, PropsWithChildren } from "react";
import { tw } from "~/tw";

export const Main: FC<PropsWithChildren & { className?: string }> = (props) => (
  <main className={tw("px-2 py-8 sm:px-8 lg:px-16", props.className)}>
    {props.children}
  </main>
);
