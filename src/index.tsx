import { router } from "./router";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";

const node = document.getElementById("root") as HTMLElement;
const root = createRoot(node);

root.render(<RouterProvider router={router} />);
