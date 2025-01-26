import { lazy } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Metrics } from "./pages/Metrics";
import Assessments from "./pages/Assessments";
import { LeaderboardContainer } from "./pages/Leaderboard/LeaderboardContainer";
import { Referrals } from "./pages/Referrals";
import { SignInContainer } from "./pages/SignIn/SignInContainer";
import { SignUpContainer } from "./pages/SignUp/SignUpContainer";

const Loading = lazy(() => import("./pages/Loading"));

export const routes = [
  { path: "/", element: <Loading /> },
  { path: "/metrics", element: <Metrics /> },
  { path: "/assessments", element: <Assessments /> },
  { path: "/rankings", element: <LeaderboardContainer /> },
  { path: "/referrals", element: <Referrals /> },
  { path: "/signin", element: <SignInContainer /> },
  { path: "/signup", element: <SignUpContainer /> },
];

const Routes = () => {
  return (
    <RouterRoutes>
      {routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}
    </RouterRoutes>
  )
}

export default Routes;
