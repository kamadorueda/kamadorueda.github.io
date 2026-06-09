import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/utils/tw";

const Primary: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <h1
    className={tw(
      "text-ctextdark text-center text-xl font-bold",
      props.className,
    )}
  >
    {props.children}
  </h1>
);

const Secondary: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <h2 className={tw("text-ctextdark mt-16 text-lg font-bold", props.className)}>
    {props.children}
  </h2>
);

const Tertiary: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <h3
    className={tw("text-ctextdark mt-8 text-base font-bold", props.className)}
  >
    {props.children}
  </h3>
);

export const Header = Object.assign(Primary, {
  Primary,
  Secondary,
  Tertiary,
});
