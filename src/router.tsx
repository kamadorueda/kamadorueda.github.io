import {
  Navigate,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "~/routes";
import { About } from "~/views/About";
import { Disclaimers } from "~/views/Disclaimers";
import { Gallery } from "~/views/Gallery";
import { NotFound } from "~/views/NotFound";
import { Projects } from "~/views/Projects";
import { Thoughts } from "~/views/Thoughts";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route element={<About />} path={"/"} />
      <Route element={<About />} path={routes.About.path} />
      <Route element={<Disclaimers />} path={routes.Disclaimers.path} />
      <Route element={<Gallery />} path={routes.Gallery.path} />
      <Route element={<NotFound />} path={routes.NotFound.path} />
      <Route element={<Projects />} path={routes.Projects.path} />
      <Route element={<Thoughts />} path={routes.Thoughts.path} />

      <Route element={<Navigate to={routes.NotFound.path} />} path="*" />
    </>,
  ),
);
