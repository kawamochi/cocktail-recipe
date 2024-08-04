import { createRoot } from "react-dom/client";
import {Home} from "./pages/Home"
import { RecipePage } from "./pages/Recipe";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "/recipe/:id",
    element: <RecipePage/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);