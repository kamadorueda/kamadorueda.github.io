import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/utils/tw";

type ButtonGroupVariant = "fullRounded" | "bottomRounded";

export interface ButtonGroupProps extends ClassNameProp {
  variant?: ButtonGroupVariant;
}

const getVariantStyles = (variant: ButtonGroupVariant): string => {
  return tw(
    "grid items-center",
    variant === "fullRounded"
      ? "coutline m-auto w-fit grid-flow-col rounded-full"
      : "border-coutline w-full rounded-b-3xl border",
  );
};

export const ButtonGroup: FC<PropsWithChildren & ButtonGroupProps> = ({
  variant = "fullRounded",
  className,
  children,
}) => (
  <div className={tw(getVariantStyles(variant), className)}>{children}</div>
);
