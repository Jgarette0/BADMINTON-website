import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header/Header";
import HomePage from "./Home";

import KeyboardNavigation from "@/Hooks/KeyboardShortcuts";
import ToolList from "@/Layout/ToolList";
import { Suspense } from "react";
import LoadingSpinner from "@/Layout/LoadingSpinner";
import Footer from "@/components/Footer/Footer";

const GlobalPage = () => {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <KeyboardNavigation />
        {location.pathname === "/" && <HomePage />}
        <Outlet />
      </Suspense>
      <ToolList />
      <Footer />
    </>
  );
};

export default GlobalPage;
{
  /* <div className="bg-primary w-full h-full absolute opacity-0 hover:opacity-100 transition-all duration-1000 ease-in-out "></div> */
}
