import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./RoutePaths.ts";
import PrivateRoute from "./PrivateRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";

const Home = lazy(() => import("../components/Pages/Home/index.tsx"));
const Create = lazy(() => import("../components/Pages/About/Create/index.tsx"));
const Login = lazy(() => import("../components/Pages/Auth/Login/index.tsx"));
const Dashboard = lazy(() => import("../components/Pages/Dashboard/index.tsx"));
const Settings = lazy(() => import("../components/Pages/Settings/index.tsx"));
const NotFoundPage = lazy(() => import("../components/Pages/NotFound/index.tsx"));

const Loader = () => <div>Loading...</div>;

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes... */}
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<Create />} />

          {/* Protected Routes... */}
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.SETTINGS}
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />

          {/* 404 Not Found Page... */}
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
