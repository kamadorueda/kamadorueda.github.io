import { createHashRouter } from "react-router-dom";
import { routes } from "~/routes";
import { LandingPage } from "~/views/LandingPage";

export const router = createHashRouter([
  { ...routes.landingPage, element: <LandingPage /> },
]);
