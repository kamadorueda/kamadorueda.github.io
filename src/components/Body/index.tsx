import { FC, PropsWithChildren } from "react";
import { tw } from "~/tw";

export const Body: FC<PropsWithChildren> = (props) => (
  <div className="min-h-screen min-w-80">
    <div className="pb-4shadow m-auto min-h-screen max-w-5xl border border-gray-200 bg-white shadow-gray-200 lg:pb-8 ">
      {props.children}
    </div>
  </div>
);

export const Main: FC<PropsWithChildren & { className?: string }> = (props) => (
  <main className={tw("pt-16 lg:px-16", props.className)}>
    {props.children}
  </main>
);
