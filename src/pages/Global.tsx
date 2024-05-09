import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header/Header";
import KeyboardNavigation from "@/Hooks/KeyboardShortcuts";
import ToolList from "@/Layout/ToolList";
import { Suspense, lazy } from "react";
import LoadingSpinner from "@/Layout/LoadingSpinner";
import { Toaster } from "@/components/ui/sonner";
import Cvraa from "@/Layout/Cvraa";
const HomePage = lazy(() => import("./Home"));
const GlobalPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <KeyboardNavigation />
        {location.pathname === "/" && <HomePage />}
        <Outlet />
      </Suspense>
      <ToolList />
      <Toaster />
      <Cvraa />
    </>
  );
};

export default GlobalPage;
