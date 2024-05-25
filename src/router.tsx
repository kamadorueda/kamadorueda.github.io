import { Gallery } from "./views/Gallery";
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "~/routes";
import { About } from "~/views/About";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route element={<About />} path={"/"} />
      <Route element={<About />} path={routes.About.path} />
      <Route element={<Gallery />} path={routes.Gallery.path} />
    </>,
  ),
);
