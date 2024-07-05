import { Transition as HeadlessUiTransition } from "@headlessui/react";
import { FC, PropsWithChildren } from "react";

export const Body: FC<PropsWithChildren> = (props) => (
  <HeadlessUiTransition
    appear={true}
    enter="transition-opacity ease-in"
    enterFrom="opacity-75"
    enterTo="opacity-100"
    show={true}
  >
    <div className="min-h-screen min-w-80 bg-slate-50">
      <div className="m-auto min-h-screen max-w-5xl bg-white pb-4 shadow shadow-slate-200 lg:pb-8">
        {props.children}
      </div>
    </div>
  </HeadlessUiTransition>
);