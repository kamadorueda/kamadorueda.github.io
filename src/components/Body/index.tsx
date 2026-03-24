import { FC, PropsWithChildren } from "react";

export const Body: FC<PropsWithChildren> = (props) => (
  <div className="from-coutline to-cbg min-h-screen min-w-80 bg-gradient-to-tr">
    <div className="coutline bg-cbgdefault m-auto min-h-screen max-w-5xl px-2 py-2 sm:px-8 sm:py-8 lg:px-16 lg:py-16">
      {props.children}
    </div>
  </div>
);
