import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FC } from "react";
import { Link, useMatches } from "react-router-dom";
import { match } from "ts-pattern";
import { routes } from "~/routes";
import { tw } from "~/tw";

const link = tw(
  "text-slate-500 transition",
  // Focus
  "focus-visible:text-blue-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500",
  // Hover
  "hover:text-slate-900",
);
const linkActive = tw("underline underline-offset-2");

const largeLink = tw(link, "block h-12 px-1 pt-3");

export const Nav: FC = () => {
  const [matches] = useMatches();

  const current = match(matches)
    .with({ pathname: "/" }, () => "About" as const)
    .with({ pathname: routes.About.path }, () => "About" as const)
    .with({ pathname: routes.Gallery.path }, () => "Gallery" as const)
    .with({ pathname: routes.Thoughts.path }, () => "Thoughts" as const)
    .otherwise(() => "Page Not Found");

  return (
    <nav className="sm:pt-8">
      {/* Large menu */}
      <div className="hidden sm:block">
        <div className="m-auto flex w-fit flex-wrap items-center space-x-2 rounded-full border border-slate-200 px-4 shadow shadow-slate-200">
          <AboutLink
            className={tw(largeLink, current === "About" && linkActive)}
          />
          <GalleryLink
            className={tw(largeLink, current === "Gallery" && linkActive)}
          />
          <ProjectsLink className={tw(largeLink)} />
          <ResumeLink className={tw(largeLink)} />
          <ThoughtsLink
            className={tw(largeLink, current === "Thoughts" && linkActive)}
          />
        </div>
      </div>

      {/* Small menu */}
      <Popover className="flex w-full items-start border-b border-slate-200 pl-4 pr-4 pt-4 shadow shadow-slate-200  sm:hidden">
        <PopoverButton
          className={tw(
            "group mb-4 flex w-full items-center gap-x-4 transition data-[open]:w-fit",
            // Focus
            "focus-visible:text-blue-500 focus-visible:outline focus-visible:outline-blue-500",
          )}
        >
          {({ open }) => (
            <>
              <svg
                className={tw(
                  "h-8 w-8 stroke-slate-500 transition",
                  // Focus
                  "group-focus-visible:stroke-blue-500",
                  // Hover
                  "group-hover:stroke-slate-900",
                )}
                role="img"
              >
                <use xlinkHref={open ? "#close-button" : "#menu"} />
              </svg>
              {!open && (
                <span
                  className={tw(
                    "text-slate-500 transition",
                    // Focus
                    "group-focus-visible:text-blue-500",
                    // Hover
                    "group-hover:text-slate-900 group-hover:underline",
                  )}
                >
                  {current}
                </span>
              )}
            </>
          )}
        </PopoverButton>
        <PopoverPanel
          className={tw(
            "mb-4 ml-4 mr-2 grid grow items-center gap-y-4 border-l border-slate-200 pl-6",
          )}
        >
          <AboutLink className={tw(link, current === "About" && linkActive)} />
          <GalleryLink
            className={tw(link, current === "Gallery" && linkActive)}
          />
          <ProjectsLink className={link} />
          <ResumeLink className={link} />
          <ThoughtsLink
            className={tw(link, current === "Thoughts" && linkActive)}
          />
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

const GalleryLink: FC<{
  className: string;
}> = (props) => (
  <Link className={props.className} to={routes.Gallery.path}>
    Gallery
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

const ThoughtsLink: FC<{
  className: string;
}> = (props) => (
  <Link className={props.className} to={routes.Thoughts.path}>
    Thoughts
  </Link>
);
