import { FC } from "react";
import { Link, useMatches } from "react-router-dom";
import { routes } from "~/routes";
import { tw } from "~/tw";

const link = tw(
  "block h-12 px-1 pt-3 font-bold text-gray-600",
  // Focus
  "focus-visible:border-2 focus-visible:border-blue-500 focus-visible:text-blue-500 focus-visible:outline-none",
  // Hover
  "hover:border-b-2 hover:border-black hover:text-gray-900",
);
const active = tw("hidden lg:block");

export const Nav: FC = () => {
  const [matches] = useMatches();
  const { pathname } =
    matches === undefined ? { pathname: undefined } : matches;

  return (
    <nav className="m-auto flex w-fit flex-wrap items-center gap-x-2 rounded-full border border-gray-200 px-5 shadow shadow-gray-200">
      <Link
        className={tw(link, routes.About.path === pathname && active)}
        to={routes.About.path}
      >
        About
      </Link>
      <a
        className={tw(link)}
        href="https://github.com/kamadorueda"
        rel="noopener noreferrer"
        target="_blank"
      >
        Projects
      </a>
      <Link
        className={tw(link, routes.Gallery.path === pathname && active)}
        to={routes.Gallery.path}
      >
        Gallery
      </Link>
      <a
        className={tw(link)}
        href="https://linkedin.com/in/kamadorueda"
        rel="noopener noreferrer"
        target="_blank"
      >
        Resume
      </a>
    </nav>
  );
};
