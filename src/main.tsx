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
import Draft from "./draft/Draft";
import LocationPage from "./pages/Options/Location";
import SettingsPage from "./pages/Options/Settings";
import BillingPage from "./pages/Options/Billing";
import SupportPage from "./pages/Options/Support";
import TeamPage from "./pages/Options/Team";
import ContactPage from "./pages/Options/Contact";
import TermsPage from "./pages/Options/Terms";
import DocsPage from "./pages/Options/Docs";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./pages/Signin";
import SignUpPage from "./pages/Signup";
import LoadingSpinner from "./Layout/LoadingSpinner";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setLoading(false);
    }, 0); // Change 2000 to the actual time it takes to load your content
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
        {
          path: "/signin",
          element: <SignInPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
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
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <React.StrictMode>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-primary text-md font-semibold py-5 transition-all duration-300 ease-in-out rounded-sm text-secondary hover:opacity-80 hover:bg-primary hover:text-secondary",
            formFieldInput:
              "flex h-10 w-full border border-input bg-background px-3 py-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-primary mt-2",
            formFieldLabel:
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary",
            headerTitle: "text-primary",
            headerSubtitle: "text-primary opacity-80",
            dividerText: "text-primary",
            dividerLine: "bg-primary",
            socialButtonsBlockButton:
              "bg-secondary text-md font-mona py-4 transition-all duration-300 ease-in-out rounded-sm border-none text-primary transition-all duration-300 ease-in-out hover:bg-secondary hover:text-primary font-semibold hover:scale-105",
            socialButtonsBlockButtonArrow: "text-primary",
            footerActionText: "text-primary",
            footerActionLink:
              "text-gold hover:text-gold hover:scale-105 transition all duration-300 ease-in-out",
            socialButtonsIconButton:
              "bg-gray-50 text-md font-mona py-4 transition-all duration-300 ease-in-out rounded-sm border-none text-primary transition-all duration-300 ease-in-out hover:bg-secondary hover:text-primary font-semibold hover:scale-105",
          },
        }}
      >
        <ClerkLoading>
          <LoadingSpinner />
        </ClerkLoading>
        <ClerkLoaded>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col place-items-center w-screen md:w-full border border-red px-4 max-1k  overflow-hidden box-border border-none">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <RouterProvider router={router} />
              )}
            </div>
          </ThemeProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
