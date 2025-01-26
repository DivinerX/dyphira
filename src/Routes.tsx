import { lazy } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Metrics } from "./pages/Metrics";
import { Assessments } from "./pages/Assessments/Assessments";
import { TakeAssessmentContainer } from "./pages/TakeAssessment/TakeAssessmentContainer";
import { LeaderboardContainer } from "./pages/Leaderboard/LeaderboardContainer";
import { Referrals } from "./pages/Referrals";
import { SignInContainer } from "./pages/SignIn/SignInContainer";
import { SignUpContainer } from "./pages/SignUp/SignUpContainer";
import PrivateRoute from "./components/PrivateRoute";

const Loading = lazy(() => import("./pages/Loading"));

export const routes = [
  { path: "/", element: <PrivateRoute><TakeAssessmentContainer /></PrivateRoute> },
  { path: "/metrics", element: <PrivateRoute><Metrics /></PrivateRoute> },
  { path: "/assessments", element: <PrivateRoute><Assessments /></PrivateRoute> },
  { path: "/assessment", elements: <TakeAssessmentContainer /> },
  { path: "/rankings", element: <LeaderboardContainer /> },
  { path: "/referrals", element: <Referrals /> },
  { path: "/login", element: <SignInContainer /> },
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
