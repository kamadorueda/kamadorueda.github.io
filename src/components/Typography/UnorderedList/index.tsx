import { FC, PropsWithChildren } from "react";

export const UnorderedList: FC<PropsWithChildren> = (props) => (
  <ul className="marker:text-ctext mt-4 ml-8 list-outside list-disc space-y-1">
    {props.children}
  </ul>
);
