import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { FC } from "react";
import { ChevronDownIcon } from "~/components/icons/ChevronDown";
import { CloseIcon } from "~/components/icons/Close";
import { ButtonGroup } from "~/components/Typography/ButtonGroup";
import { ExternalLink } from "~/components/Typography/ExternalLink";
import { InternalLink } from "~/components/Typography/InternalLink";
import { ClassNameProp, tw } from "~/utils/tw";

const linkInactive = "no-underline";

const smallLink = tw("py-4 pr-4 pl-4", linkInactive);
const largeLink = "px-2 py-2";

type CurrentLocation = "About" | "Gallery" | "Projects" | "Thoughts" | "Other";

interface NavProps {
  current?: CurrentLocation;
}

export const Nav: FC<NavProps> = ({ current = "Other" }) => {
  return (
    <nav>
      <div className="hidden sm:block">
        <DesktopNav current={current} />
      </div>
      <div className="sm:hidden">
        <MobileNav current={current} />
      </div>
    </nav>
  );
};

const DesktopNav: FC<{ current: CurrentLocation }> = ({ current }) => (
  <div className="align-center flex">
    <div className="flex flex-1">
      <Image className="" />
    </div>
    <ButtonGroup variant="fullRounded">
      <AboutLink
        className={tw(
          largeLink,
          current !== "About" && linkInactive,
          "rounded-l-full pl-4",
        )}
      />
      <ThoughtsLink
        className={tw(largeLink, current !== "Thoughts" && linkInactive)}
      />
      <GalleryLink
        className={tw(largeLink, current !== "Gallery" && linkInactive)}
      />
      <ResumeLink className={tw(largeLink, linkInactive)} />
      <ProjectsLink
        className={tw(
          largeLink,
          current !== "Projects" && linkInactive,
          "rounded-r-full pr-4",
        )}
      />
    </ButtonGroup>
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
          "coutline group text-ctext flex items-center gap-x-2 rounded-full px-8 py-3 transition",
          "cfocus-visible",
          "chover-bg",
        )}
      >
        <span>Menu</span>
        <ChevronDownIcon
          className={tw(
            "stroke-ctext h-4 w-4",
            // Focus
            "group-focus-visible:stroke-cfocus",
            // Hover
            "group-hover:stroke-ctextdark",
          )}
        />
      </PopoverButton>
      <PopoverBackdrop className="bg-ctextdark/60 fixed inset-0 z-10 backdrop-blur-xs" />
      <PopoverPanel className="coutline bg-cbgdefault fixed inset-x-0 z-10 m-auto grid w-64 items-center rounded-sm">
        <div className="flex items-center justify-between">
          <span className="text-ctext pl-4">Menu</span>
          <CloseButton
            className={tw(
              "group z-10 m-1 rounded-full p-3",
              "cfocus-visible",
              "chover-bg",
            )}
          >
            <CloseIcon
              className={tw(
                "stroke-ctext h-6 w-6 transition",
                // Focus
                "group-focus-visible:stroke-cfocus",
                // Hover
                "group-hover:stroke-ctextdark",
              )}
            />
            <span className="sr-only">Close Menu</span>
          </CloseButton>
        </div>
        <div className="coutline" />
        {current !== "About" && <AboutLink className={smallLink} />}
        {current !== "Thoughts" && <ThoughtsLink className={smallLink} />}
        {current !== "Gallery" && <GalleryLink className={smallLink} />}
        <ResumeLink className={smallLink} />
        {current !== "Projects" && <ProjectsLink className={smallLink} />}
      </PopoverPanel>
    </Popover>
  </div>
);

const AboutLink: FC<ClassNameProp> = (props) => (
  <InternalLink className={props.className} to="/">
    About
  </InternalLink>
);

const GalleryLink: FC<ClassNameProp> = (props) => (
  <InternalLink className={props.className} to="/gallery">
    Gallery
  </InternalLink>
);

const ProjectsLink: FC<ClassNameProp> = (props) => (
  <InternalLink className={props.className} to="/projects">
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
  <InternalLink className={props.className} to="/thoughts">
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
