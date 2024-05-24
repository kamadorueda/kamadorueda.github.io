import { FC, PropsWithChildren } from "react";

export const Body: FC<PropsWithChildren> = (props) => (
  <div className="min-h-screen min-w-80 bg-gray-50">
    <div className="m-auto min-h-screen max-w-5xl border border-gray-200 bg-white px-4 pb-4 pt-4 shadow shadow-gray-50 lg:px-16 lg:pb-16 lg:pt-8">
      {props.children}
    </div>
  </div>
);
