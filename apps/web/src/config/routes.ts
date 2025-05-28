import { createBrowserRouter } from "react-router";
import App from "../views/app";
import NotFound from "../views/error/NotFound";
import Register from "../views/auth/register";
import Login from "../views/auth/login";
import Overview from "../views/contacts/overview";
import ProtectedRoute from "../guard/ProtectedRoute";
import React from "preact/compat";

export default createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/contacts",
    Component: () =>
      React.createElement(
        ProtectedRoute,
        {},
        React.createElement(Overview, {})
      ),
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
