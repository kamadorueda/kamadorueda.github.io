import { FC } from "react";

export const Footer: FC = () => (
  <footer className="mt-24">
    <p className="text-ctext text-center text-xs">
      © 2023-{new Date().getFullYear()} Kevin Amado. All rights reserved.
    </p>
  </footer>
);
