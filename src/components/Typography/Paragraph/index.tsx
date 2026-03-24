import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/utils/tw";

export const Paragraph: FC<PropsWithChildren & ClassNameProp> = (props) => (
  <p className={tw("text-ctext mt-4", props.className)}>{props.children}</p>
);
