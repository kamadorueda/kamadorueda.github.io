import { createRoot } from "react-dom/client";
import { Main } from "~/components/Main";

const node = document.getElementById("root") as HTMLElement;
const root = createRoot(node);

// eslint-disable-next-line fp/no-unused-expression
root.render(<Main />);
