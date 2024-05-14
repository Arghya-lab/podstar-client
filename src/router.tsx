import { createBrowserRouter } from "react-router-dom";
import Root from "@/routes/Root";
import Error from "@/routes/Error";
import HomeRoute from "@/routes/HomeRoute";
import NotFound from "@/routes/NotFound";
import SearchRoute from "@/routes/SearchRoute";
import PodcastRoute, { PodcastRouteLoader } from "@/routes/PodcastRoute";
import LoginRoute from "@/routes/LoginRoute";
import VerifyEmailRoute from "@/routes/VerifyEmailRoute";
import ResendVerifyEmailRoute from "@/routes/ResendVerifyEmailRoute";
import RequireAuth from "./components/RequireAuth";

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
        element: <PodcastRoute />,
        loader: PodcastRouteLoader,
      },
      {
        path: "/login",
        element: <LoginRoute />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmailRoute />,
      },
      {
        path: "/resend-verify-email",
        element: (
          <RequireAuth>
            <ResendVerifyEmailRoute />,
          </RequireAuth>
        ),
      },
      {
        path: "/you",
        element: <p>you</p>,
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
