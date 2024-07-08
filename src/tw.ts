export interface ClassNameProp {
  className?: string;
}

export const tw = (...classNames: (string | undefined | false)[]) =>
  classNames.filter((className) => typeof className === "string").join(" ");
