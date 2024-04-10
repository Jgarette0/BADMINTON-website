import React, { useEffect, useState } from "react";
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
import LoadingSpinner from "./components/LoadingSpinner";
import Draft from "./pages/Draft";
import LocationPage from "./pages/Options/Location";
import SettingsPage from "./pages/Options/Settings";
import BillingPage from "./pages/Options/Billing";
import SupportPage from "./pages/Options/Support";
import TeamPage from "./pages/Options/Team";
import ContactPage from "./pages/Options/Contact";
import TermsPage from "./pages/Options/Terms";
import DocsPage from "./pages/Options/Docs";

const Render = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Change 2000 to the actual time it takes to load your content
  }, []);

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
        {
          path: "/billing",
          element: <BillingPage />,
        },
        {
          path: "/settings",
          element: <SettingsPage />,
        },
        {
          path: "/support",
          element: <SupportPage />,
        },
        {
          path: "/team",
          element: <TeamPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/location",
          element: <LocationPage />,
        },
        {
          path: "/terms",
          element: <TermsPage />,
        },
        {
          path: "/docs",
          element: <DocsPage />,
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
    {
      path: "/test",
      element: <Draft />,
    },
  ]);
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col place-items-center w-screen md:w-full border border-red px-4 max-1k  overflow-hidden box-border border-none">
          {loading ? <LoadingSpinner /> : <RouterProvider router={router} />}
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Render />);
