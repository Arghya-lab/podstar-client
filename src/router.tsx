import { createBrowserRouter } from "react-router-dom";
import Root from "@/routes/Root";
import Error from "@/routes/Error";
import HomeRoute from "@/routes/HomeRoute";
import NotFound from "@/routes/NotFound";
import SearchRoute from "@/routes/SearchRoute";
import PodcastRoute, { PodcastRouteLoader } from "@/routes/PodcastRoute";
import LoginRoute from "@/routes/LoginRoute";
import VerifyEmailRoute from "@/routes/VerifyEmailRoute";
import ForgotPasswordRoute from "./routes/ForgotPasswordRoute";
import ResendVerifyEmailRoute from "@/routes/ResendVerifyEmailRoute";
import RequireAuth from "@/components/RequireAuth";
import UserRoute from "@/routes/UserRoute";
import AccountRoute from "@/routes/AccountRoute";
import ChangePasswordRoute from "./routes/ChangePasswordRoute";

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
        path: "/forgot-password",
        element: <ForgotPasswordRoute />,
      },
      {
        path: "/change-password",
        element: <ChangePasswordRoute />,
      },
      {
        path: "/you",
        element: <UserRoute />,
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
        path: "/account",
        element: (
          <RequireAuth>
            <AccountRoute />
          </RequireAuth>
        ),
      },
      {
        path: "/import-export",
        element: <p>import-export</p>,
      },
      {
        path: "/player-setting",
        element: <p>player-setting</p>,
      },
      {
        path: "/subscriptions",
        element: <p>subscriptions</p>,
      },
      {
        path: "/favorites",
        element: <p>favorites</p>,
      },
      {
        path: "/history",
        element: <p>history</p>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
