import { FC, PropsWithChildren, ReactNode } from "react";
import { ClassNameProp, tw } from "~/utils/tw";

interface DefinitionProps extends PropsWithChildren, ClassNameProp {
  term: ReactNode;
}

export const Definition: FC<DefinitionProps> = ({
  term,
  className,
  children,
}) => (
  <dl className={tw("text-ctext mt-4", className)}>
    <dt className="font-semibold">{term}</dt>
    <dd className="ml-4">{children}</dd>
  </dl>
);
