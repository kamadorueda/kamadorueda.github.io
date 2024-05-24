import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "~/routes";
import { About } from "~/views/About";
import { Gallery } from "./views/Gallery";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<About />} />
      <Route path={routes.About.path} element={<About />} />
      <Route path={routes.Gallery.path} element={<Gallery />} />
    </>,
  ),
);
