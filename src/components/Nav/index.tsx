import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { FC } from "react";
import { useMatches } from "react-router-dom";
import { match } from "ts-pattern";
import { ExternalLink, InternalLink } from "~/components/Typography";
import { routes } from "~/routes";
import { ClassNameProp, tw } from "~/tw";

const linkInactive = "no-underline";

const smallLink = tw("py-4 pl-4 pr-4", linkInactive);
const largeLink = "px-2 py-2";

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
    <div className="coutline m-auto grid w-fit grid-flow-col items-center rounded-full">
      <AboutLink
        className={tw(
          largeLink,
          current !== "About" && linkInactive,
          "rounded-l-full pl-4",
        )}
      />
      <ProjectsLink
        className={tw(largeLink, current !== "Projects" && linkInactive)}
      />
      <GalleryLink
        className={tw(largeLink, current !== "Gallery" && linkInactive)}
      />
      <ResumeLink className={tw(largeLink, linkInactive)} />
      <ThoughtsLink
        className={tw(
          largeLink,
          current !== "Thoughts" && linkInactive,
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
          "coutline group flex items-center gap-x-2 rounded-full px-8 py-3 text-ctext transition",
          "cfocus-visible",
          "chover-bg",
        )}
      >
        <span>Menu</span>
        <svg
          className={tw(
            "h-4 w-4 stroke-ctext",
            // Focus
            "group-focus-visible:stroke-cfocus",
            // Hover
            "group-hover:stroke-ctextdark",
          )}
          role="img"
        >
          <use xlinkHref="#chevron-down" />
        </svg>
      </PopoverButton>
      <PopoverBackdrop className="fixed inset-0 z-10 bg-ctextdark/60 backdrop-blur-sm" />
      <PopoverPanel className="coutline fixed inset-x-0 z-10 m-auto grid w-64 items-center rounded bg-cbgdefault">
        <div className="flex items-center justify-between">
          <span className="pl-4 text-ctext">Menu</span>
          <CloseButton
            className={tw(
              "group z-10 m-1 rounded-full p-3",
              "cfocus-visible",
              "chover-bg",
            )}
          >
            <svg
              className={tw(
                "h-6 w-6 stroke-ctext transition",
                // Focus
                "group-focus-visible:stroke-cfocus",
                // Hover
                "group-hover:stroke-ctextdark",
              )}
              role="img"
            >
              <use xlinkHref="#close-button" />
            </svg>
            <span className="sr-only">Close Menu</span>
          </CloseButton>
        </div>
        <div className="coutline" />
        {current !== "About" && <AboutLink className={smallLink} />}
        {current !== "Projects" && <ProjectsLink className={smallLink} />}
        {current !== "Gallery" && <GalleryLink className={smallLink} />}
        <ResumeLink className={smallLink} />
        {current !== "Thoughts" && <ThoughtsLink className={smallLink} />}
      </PopoverPanel>
    </Popover>
  </div>
);

const AboutLink: FC<ClassNameProp> = (props) => (
  <InternalLink className={props.className} to={routes.About.path}>
    About
  </InternalLink>
);

const GalleryLink: FC<ClassNameProp> = (props) => (
  <InternalLink className={props.className} to={routes.Gallery.path}>
    Gallery
  </InternalLink>
);

const ProjectsLink: FC<ClassNameProp> = (props) => (
  <InternalLink className={props.className} to={routes.Projects.path}>
    Projects
  </InternalLink>
);

const ResumeLink: FC<ClassNameProp> = (props) => (
  <ExternalLink
    className={props.className}
    to="https://linkedin.com/in/kamadorueda"
  >
    Resume
  </ExternalLink>
);

const ThoughtsLink: FC<ClassNameProp> = (props) => (
  <InternalLink className={props.className} to={routes.Thoughts.path}>
    Thoughts
  </InternalLink>
);

const Image: FC<ClassNameProp> = (props) => (
  <img
    alt="Kevin's profile"
    aria-hidden
    className={tw(
      "h-12 w-12 rounded-full transition",
      // Hover
      "hover:scale-125",
      props.className,
    )}
    src="https://avatars.githubusercontent.com/u/47480384?v=4"
  />
);
