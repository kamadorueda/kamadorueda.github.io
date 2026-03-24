// @ts-expect-error - React Router v7 type resolution issue
import { createHashRouter } from "react-router-dom";
import { routes } from "~/routes";
import { About } from "~/views/About";
import { Disclaimers } from "~/views/Disclaimers";
import { Gallery } from "~/views/Gallery";
import { NotFound } from "~/views/NotFound";
import { Projects } from "~/views/Projects";
import { Thoughts } from "~/views/Thoughts";

export const router = createHashRouter([
  { path: "/", element: <About /> },
  { path: routes.About.path, element: <About /> },
  { path: routes.Disclaimers.path, element: <Disclaimers /> },
  { path: routes.Gallery.path, element: <Gallery /> },
  { path: routes.Projects.path, element: <Projects /> },
  { path: routes.Thoughts.path, element: <Thoughts /> },
  { path: routes.NotFound.path, element: <NotFound /> },
  { path: "*", element: <NotFound /> },
]);
