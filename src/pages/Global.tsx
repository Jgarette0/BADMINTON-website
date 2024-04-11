import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header/Header";
import HomePage from "./Home";

import KeyboardNavigation from "@/Hooks/KeyboardShortcuts";
import ToolList from "@/Layout/ToolList";

const GlobalPage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <KeyboardNavigation />
      {location.pathname === "/" && <HomePage />}
      <Outlet />
      <ToolList />
    </>
  );
};

export default GlobalPage;
