import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./RoutePaths.ts";
import PrivateRoute from "./PrivateRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";
import Home from "../components/Pages/Home/index.tsx";
import Create from "../components/Pages/About/Create/index.tsx";
import Login from "../components/Pages/Auth/Login/index.tsx";
import Dashboard from "../components/Pages/Dashboard/index.tsx";
import Settings from "../components/Pages/Settings/index.tsx";
import NotFoundPage from "../components/Pages/NotFound/index.tsx";
const AppRoutes = () => {
  return (
    <Router>
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

        {/* Private Routes for Only accessible to authenticated users... */}
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
        {/* Page is not found  */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
