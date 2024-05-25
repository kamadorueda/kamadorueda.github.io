import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FC } from "react";
import { Link, useMatches } from "react-router-dom";
import { match } from "ts-pattern";
import { routes } from "~/routes";
import { tw } from "~/tw";

const smallLink = tw(
  "h-8 py-1 text-gray-500",
  // Focus
  "focus-visible:border-2 focus-visible:border-blue-500 focus-visible:text-blue-500 focus-visible:outline-none",
  // Hover
  "hover:border-b-2 hover:border-gray-900 hover:text-gray-900",
);
const smallLinkActive = tw("border-b-2 border-gray-900 text-gray-900");

const largeLink = tw(
  "block h-12 px-1 pt-3 text-gray-500",
  // Focus
  "focus-visible:border-2 focus-visible:border-blue-500 focus-visible:text-blue-500 focus-visible:outline-none",
  // Hover
  "hover:border-b-2 hover:border-gray-900 hover:text-gray-900",
);
const largeLinkActive = tw("border-b-2 border-gray-900 text-gray-900");

export const Nav: FC = () => {
  const [matches] = useMatches();

  const current = match(matches)
    .with({ pathname: routes.About.path }, () => "About" as const)
    .with({ pathname: routes.Gallery.path }, () => "Gallery" as const)
    // eslint-disable-next-line fp/no-nil
    .otherwise(() => undefined);

  return (
    <nav className="">
      {/* Large menu */}
      <div className="hidden sm:block">
        <div className="m-auto flex w-fit flex-wrap items-center gap-x-2 rounded-full border border-gray-200 px-4 shadow shadow-gray-200">
          <AboutLink
            className={tw(largeLink, current === "About" && largeLinkActive)}
          />
          <ProjectsLink className={tw(largeLink)} />
          <GalleryLink
            className={tw(largeLink, current === "Gallery" && largeLinkActive)}
          />
          <ResumeLink className={tw(largeLink)} />
        </div>
      </div>

      {/* Small menu */}
      <Popover className="m-auto grid w-64 auto-cols-max grid-flow-col items-start rounded border border-gray-200 p-4 pb-0 shadow shadow-gray-200 sm:hidden">
        <PopoverButton
          className={tw(
            "group mb-4 grid w-min auto-cols-min grid-flow-col items-center gap-x-4 transition-all",
            // Focus
            "focus-visible:border-2 focus-visible:border-blue-500 focus-visible:text-blue-500 focus-visible:outline-none",
          )}
        >
          {({ open }) => (
            <>
              <svg
                className={tw(
                  "h-8 w-8 stroke-gray-500",
                  // Hover
                  "group-hover:stroke-gray-900 group-hover:transition-all",
                  // Hover
                  "group-focus-visible:stroke-blue-500 group-focus-visible:transition-all",
                )}
                role="img"
              >
                <use xlinkHref={open ? "#close-button" : "#menu"} />
              </svg>
              {!open && (
                <span
                  className={tw(
                    "text-gray-500",
                    // Focus
                    "group-focus-visible:text-blue-500",
                    // Hover
                    "group-hover:text-gray-900",
                  )}
                >
                  {current === undefined ? "Navigation" : current}
                </span>
              )}
            </>
          )}
        </PopoverButton>
        <PopoverPanel
          className={tw(
            "mb-4 ml-4 mr-2 grid items-center gap-y-4 border-l border-gray-200 pl-6",
            // Focus
            "focus-visible:outline-none",
          )}
        >
          <AboutLink
            className={tw(smallLink, current === "About" && smallLinkActive)}
          />
          <ProjectsLink className={smallLink} />
          <GalleryLink
            className={tw(smallLink, current === "Gallery" && smallLinkActive)}
          />
          <ResumeLink className={smallLink} />
        </PopoverPanel>
      </Popover>

      {/* SVG Icons */}
      <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <symbol id="close-button" viewBox="0 0 24 24">
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </symbol>
          <symbol id="menu" viewBox="0 0 24 24">
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </symbol>
        </defs>
      </svg>
    </nav>
  );
};

const AboutLink: FC<{
  className: string;
}> = (props) => (
  <Link className={props.className} to={routes.About.path}>
    About
  </Link>
);

const ProjectsLink: FC<{
  className: string;
}> = (props) => (
  <a
    className={props.className}
    href="https://github.com/kamadorueda"
    rel="noopener noreferrer"
    target="_blank"
  >
    Projects
  </a>
);

const GalleryLink: FC<{
  className: string;
}> = (props) => (
  <Link className={props.className} to={routes.Gallery.path}>
    Gallery
  </Link>
);

const ResumeLink: FC<{
  className: string;
}> = (props) => (
  <a
    className={props.className}
    href="https://linkedin.com/in/kamadorueda"
    rel="noopener noreferrer"
    target="_blank"
  >
    Resume
  </a>
);
