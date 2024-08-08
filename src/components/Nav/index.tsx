import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { FC } from "react";
import { Link, useMatches } from "react-router-dom";
import { match } from "ts-pattern";
import { routes } from "~/routes";
import { tw } from "~/tw";

const link = tw(
  "text-slate-600 transition",
  // Focus
  "focus-visible:text-blue-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500",
  // Hover
  "hover:bg-slate-50 hover:text-slate-900",
);
const linkActive = tw("underline underline-offset-2");

const smallLink = tw(link, "py-4 pl-4 pr-4");
const largeLink = tw(link, "px-2 py-2");

type CurrentLocation = "About" | "Gallery" | "Projects" | "Thoughts" | "Other";

export const Nav: FC = () => {
  const [matches] = useMatches();

  const current: CurrentLocation = match(matches)
    .with({ pathname: "/" }, () => "About" as const)
    .with({ pathname: routes.About.path }, () => "About" as const)
    .with({ pathname: routes.Gallery.path }, () => "Gallery" as const)
    .with({ pathname: routes.Projects.path }, () => "Projects" as const)
    .with({ pathname: routes.Thoughts.path }, () => "Thoughts" as const)
    .otherwise(() => "Other" as const);

  return (
    <nav>
      <div className="hidden sm:block">
        <DesktopNav current={current} />
      </div>
      <div className="sm:hidden">
        <MobileNav current={current} />
      </div>

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
          <symbol id="chevron-down" viewBox="0 0 8 6">
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </symbol>
        </defs>
      </svg>
    </nav>
  );
};

const DesktopNav: FC<{ current: CurrentLocation }> = ({ current }) => (
  <div className="align-center flex">
    <div className="flex flex-1">
      <Image className="" />
    </div>
    <div className="m-auto grid w-fit grid-flow-col items-center rounded-full outline outline-1 outline-slate-300">
      <AboutLink
        className={tw(
          largeLink,
          current === "About" && linkActive,
          "rounded-l-full pl-4",
        )}
      />
      <ProjectsLink
        className={tw(largeLink, current === "Projects" && linkActive)}
      />
      <GalleryLink
        className={tw(largeLink, current === "Gallery" && linkActive)}
      />
      <ResumeLink className={tw(largeLink)} />
      <ThoughtsLink
        className={tw(
          largeLink,
          current === "Thoughts" && linkActive,
          "rounded-r-full pr-4",
        )}
      />
    </div>
    <div className="flex flex-1" />
  </div>
);

const MobileNav: FC<{ current: CurrentLocation }> = ({ current }) => (
  <div className="flex">
    <div className="flex flex-1">
      <Image className="h-10 w-10" />
    </div>
    <Popover className="">
      <PopoverButton
        className={tw(
          "group flex items-center gap-x-2 rounded-full px-8 py-3 outline outline-1 outline-slate-300 transition",
          // Focus
          "focus-visible:text-blue-500 focus-visible:outline focus-visible:outline-blue-500",
          // Hover
          "hover:bg-slate-50",
        )}
      >
        <span
          className={tw(
            "text-slate-600 transition",
            // Focus
            "group-focus-visible:text-blue-500",
            // Hover
            "group-hover:text-slate-900 group-hover:underline",
          )}
        >
          Menu
        </span>
        <svg
          className={tw(
            "h-4 w-4 stroke-slate-600 transition",
            // Focus
            "group-focus-visible:stroke-blue-500",
            // Hover
            "group-hover:stroke-slate-900",
          )}
          role="img"
        >
          <use xlinkHref="#chevron-down" />
        </svg>
      </PopoverButton>
      <PopoverBackdrop className="fixed inset-0 z-10 bg-slate-900/40 backdrop-blur-sm" />
      <PopoverPanel className="fixed inset-x-0 z-10 m-auto grid w-64 items-center rounded bg-white outline outline-1 outline-slate-300">
        <div className="flex items-center justify-between">
          <span className="pl-4 text-slate-600 transition">Menu</span>
          <CloseButton
            className={tw(
              "group z-10 m-1 rounded-full p-3",
              // Focus
              "focus-visible:text-blue-500 focus-visible:outline focus-visible:outline-blue-500",
              // Hover
              "hover:bg-slate-50",
            )}
          >
            <svg
              className={tw(
                "h-6 w-6 stroke-slate-600 transition",
                // Focus
                "group-focus-visible:stroke-blue-500",
                // Hover
                "group-hover:stroke-slate-900",
              )}
              role="img"
            >
              <use xlinkHref="#close-button" />
            </svg>
            <span className="sr-only">Close Menu</span>
          </CloseButton>
        </div>
        <div className="outline outline-1 outline-slate-300" />
        {current !== "About" && <AboutLink className={smallLink} />}
        {current !== "Projects" && <ProjectsLink className={smallLink} />}
        {current !== "Gallery" && <GalleryLink className={smallLink} />}
        <ResumeLink className={smallLink} />
        {current !== "Thoughts" && <ThoughtsLink className={smallLink} />}
      </PopoverPanel>
    </Popover>
  </div>
);

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
  <Link className={props.className} to={routes.Projects.path}>
    Projects
  </Link>
  // <a
  //   className={props.className}
  //   href="https://github.com/kamadorueda"
  //   rel="noopener noreferrer"
  //   target="_blank"
  // >
  //   Projects
  // </a>
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

const Image: FC<{
  className: string;
}> = (props) => (
  <img
    alt="Kevin's profile"
    aria-hidden
    className={tw(
      "h-12 w-12 rounded-full transition",
      // Hover
      "hover:scale-125 hover:fill-slate-900",
      props.className,
    )}
    src="https://avatars.githubusercontent.com/u/47480384?v=4"
  />
);
