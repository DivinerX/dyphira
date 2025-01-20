import { lazy } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Metrics } from "./pages/Metrics";
import Assessments from "./pages/Assessments";
import Leaderboard from "./pages/Leaderboard";

const Loading = lazy(() => import("./pages/Loading"));

export const routes = [
  { path: "/", element: <Loading /> },
  { path: "/metrics", element: <Metrics /> },
  { path: "/assessments", element: <Assessments /> },
  { path: "/rankings", element: <Leaderboard /> },
];

const Routes = () => {
  return (
    <RouterRoutes>
      {routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}
    </RouterRoutes>
  )
}

export default Routes;
