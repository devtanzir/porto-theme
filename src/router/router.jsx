import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layouts";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Blog from "../pages/Blog";
import SingleTeam from "../pages/Team/single-team";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/team/:memberId",
        element: <SingleTeam />,
      },
    ],
  },
]);

export default router;
