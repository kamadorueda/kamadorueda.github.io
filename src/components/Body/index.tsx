import { FC, PropsWithChildren } from "react";

export const Body: FC<PropsWithChildren> = (props) => (
  <div className="min-h-screen min-w-80 bg-gradient-to-tr from-slate-200 to-slate-50">
    <div className="m-auto min-h-screen max-w-5xl bg-white pb-4 outline  outline-1 outline-slate-200 lg:pb-8">
      {props.children}
    </div>
  </div>
);
