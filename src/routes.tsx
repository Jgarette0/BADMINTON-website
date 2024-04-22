import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const PaymentPage = lazy(() => import("./pages/Options/Payment"));
const GlobalPage = lazy(() => import("./pages/Global"));
const SomethingsPage = lazy(() => import("./pages/Somethings"));
const NotFound = lazy(() => import("./pages/404"));
const SomethingPage = lazy(() => import("./pages/Something"));
const ProgramPage = lazy(() => import("./pages/Program"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const HomePage = lazy(() => import("./pages/Home"));
const LocationPage = lazy(() => import("./pages/Options/Location"));
const SettingsPage = lazy(() => import("./pages/Options/Settings"));
const SupportPage = lazy(() => import("./pages/Options/Support"));
const TeamPage = lazy(() => import("./pages/Options/Team"));
const ContactPage = lazy(() => import("./pages/Options/Contact"));
const TermsPage = lazy(() => import("./pages/Options/Terms"));
const DocsPage = lazy(() => import("./pages/Options/Docs"));
const SignInPage = lazy(() => import("./pages/Signin"));
const SignUpPage = lazy(() => import("./pages/Signup"));
const Draft = lazy(() => import("./draft/Draft"));
const AboutPage = lazy(() => import("./pages/About"));
const FaqsPage = lazy(() => import("./pages/Options/Faqs"));
const Routers = () => {
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
          path: "/payment",
          element: <PaymentPage />,
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
          path: "/faq",
          element: <FaqsPage />,
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
      ],
    },

    {
      path: "/test",
      element: <Draft />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
