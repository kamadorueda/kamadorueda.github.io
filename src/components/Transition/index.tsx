import { Transition as HeadlessUiTransition } from "@headlessui/react";
import { FC, PropsWithChildren } from "react";

export const Transition: FC<PropsWithChildren> = (props) => (
  <HeadlessUiTransition
    appear={true}
    enter="transition-opacity ease-in"
    enterFrom="opacity-75"
    enterTo="opacity-100"
    show={true}
  >
    <div>{props.children}</div>
  </HeadlessUiTransition>
);
