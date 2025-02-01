// import { lazy } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { MetricsContainer } from "./pages/Metrics/MetricsContainer";
import { AssessmentContainer } from "./pages/Assessments/AssessmentContainer";
import { TakeAssessmentContainer } from "./pages/TakeAssessment/TakeAssessmentContainer";
import { LeaderboardContainer } from "./pages/Leaderboard/LeaderboardContainer";
import { ReferralsContainer } from "./pages/Referrals/ReferralsContainer";
import { SignInContainer } from "./pages/SignIn/SignInContainer";
import { SignUpContainer } from "./pages/SignUp/SignUpContainer";
import PrivateRoute from "./components/PrivateRoute";

// const Loading = lazy(() => import("./pages/Loading"));

export const routes = [
  { path: "/", element: <PrivateRoute><TakeAssessmentContainer /></PrivateRoute> },
  { path: "/metrics", element: <PrivateRoute><MetricsContainer /></PrivateRoute> },
  { path: "/assessment", element: <PrivateRoute><TakeAssessmentContainer /></PrivateRoute> },
  { path: "/assessments", element: <PrivateRoute><AssessmentContainer /></PrivateRoute> },
  { path: "/rankings", element: <LeaderboardContainer /> },
  { path: "/referrals", element: <PrivateRoute><ReferralsContainer /></PrivateRoute> },
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
