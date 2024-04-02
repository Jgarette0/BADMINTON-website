import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SomethingsPage from "./pages/Somethings";
import NotFound from "./pages/404";
import "./styles/index.css";
import SomethingPage from "./pages/Something";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/somethings",
    element: <SomethingsPage />,
    children: [
      {
        path: "/somethings/:item",
        element: <SomethingPage />,
      },
      {
        path: "/somethings/Dialog",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
