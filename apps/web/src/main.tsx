import { render } from "preact";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";

import routes from "./config/routes";
import "./app.css";

render(
  <>
    <RouterProvider router={routes} />
    <ToastContainer />
  </>,
  document.getElementById("app")!
);
