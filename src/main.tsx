import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import GlobalPage from "./pages/Global";
import SomethingsPage from "./pages/Somethings";
import NotFound from "./pages/404";
import SomethingPage from "./pages/Something";
import ProgramPage from "./pages/Program";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/Gallery";
import HomePage from "./pages/Home";
import "./styles/index.css";
import "./styles/global.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/Program",
        element: <ProgramPage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Gallery",
        element: <GalleryPage />,
      },
      {
        path: "/Home",
        element: <HomePage />,
      },
    ],
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
        path: "/somethings/Layout Grid",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col place-items-center w-screen md:w-full border border-red px-4 max-1k  overflow-hidden box-border border-none">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
