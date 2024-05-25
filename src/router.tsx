import { Gallery } from "./views/Gallery";
import {
  Navigate,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "~/routes";
import { About } from "~/views/About";
import { NotFound } from "./views/NotFound";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route element={<About />} path={"/"} />
      <Route element={<About />} path={routes.About.path} />
      <Route element={<Gallery />} path={routes.Gallery.path} />
      <Route element={<NotFound />} path={routes.NotFound.path} />

      <Route element={<Navigate to={routes.NotFound.path} />} path="*" />
    </>,
  ),
);
