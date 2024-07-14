import { FC } from "react";
import { Link } from "react-router-dom";
import { Body } from "~/components/Body";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import { routes } from "~/routes";
import { tw } from "~/tw";

export const NotFound: FC = () => (
  <Body>
    <Nav />
    <Main className="text-center">
      <h1 className="m-auto max-w-xl text-xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-4 text-slate-600">
        Perhaps you may want to visit our&nbsp;
        <Link
          className={tw(
            "text-slate-600 underline underline-offset-2 transition",
            // Focus
            "focus-visible:text-blue-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500",
            // Hover
            "hover:text-slate-900",
          )}
          to={routes.About.path}
        >
          landing page
        </Link>
        ?
      </p>
    </Main>
  </Body>
);
