import { Img } from "./styles";
import { FunctionComponent } from "react";

export const Image: FunctionComponent<{
  alt: string;
  sources: { "200x100": string; "400x200": string; "800x400": string };
}> = ({ alt, sources }) => (
  <Img
    alt={alt}
    sizes={`
      (max-width: 200px) 200px,
      (max-width: 400px) 400px,
      800px
    `}
    srcSet={`
      ${sources["200x100"]} 200w,
      ${sources["400x200"]} 400w,
      ${sources["800x400"]} 800w,
    `}
  />
);
