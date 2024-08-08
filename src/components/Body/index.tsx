import { FC, PropsWithChildren } from "react";

export const Body: FC<PropsWithChildren> = (props) => (
  <div className="min-h-screen min-w-80 bg-gradient-to-tr from-slate-300 to-slate-50">
    <div className="m-auto min-h-screen max-w-5xl bg-white px-2 py-2 outline outline-1 outline-slate-300 sm:px-8 sm:py-8 lg:px-16 lg:py-16">
      {props.children}
    </div>
  </div>
);
