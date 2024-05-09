import { createBrowserRouter } from "react-router-dom";
import Root from "@/routes/Root";
import Error from "@/routes/Error";
import HomeRoute from "@/routes/HomeRoute";
import NotFound from "@/routes/NotFound";
import SearchRoute from "@/routes/SearchRoute";
import PodcastInfoRoute, { PodcastInfoLoader } from "@/routes/PodcastInfoRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <HomeRoute />,
      },
      {
        path: "/search",
        element: <SearchRoute />,
      },
      {
        path: "/podcast/:id",
        element: <PodcastInfoRoute />,
        loader: PodcastInfoLoader,
      },
      {
        path: "/you",
        element: <p>you</p>,
      },
      {
        path: "/login",
        element: <p>login</p>,
      },
      {
        path: "/podcasts",
        element: <p>podcasts</p>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
