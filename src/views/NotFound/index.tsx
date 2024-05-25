import { FC } from "react";
import { Link } from "react-router-dom";
import { Body, Main } from "~/components/Body";
import { Nav } from "~/components/Nav";
import { Transition } from "~/components/Transition";
import { routes } from "~/routes";
import { tw } from "~/tw";

export const NotFound: FC = () => (
  <Transition>
    <Body>
      <Nav />
      <Main className="text-center">
        <h1 className="m-auto max-w-xl text-2xl font-bold text-gray-900">
          Page not found
        </h1>
        <p className="mt-4 text-gray-500">
          Perhaps you may want to visit our
          <Link
            className={tw(
              "h-12 border-b-2 border-gray-500 px-1 pt-3 text-gray-500",
              // Focus
              "focus-visible:border-2 focus-visible:border-blue-500 focus-visible:text-blue-500 focus-visible:outline-none",
              // Hover
              "hover:border-b-2 hover:border-gray-900 hover:text-gray-900",
            )}
            to={routes.About.path}
          >
            landing page
          </Link>
          ?
        </p>
      </Main>
    </Body>
  </Transition>
);
