import { FC } from "react";

export const Footer: FC = () => (
  <footer className="mt-24">
    <p className="text-center text-xs text-slate-500">
      © 2023-{new Date().getFullYear()} Kevin Amado. All rights reserved.
    </p>
  </footer>
);
