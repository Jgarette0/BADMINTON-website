import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header/Header";
import HomePage from "./Home";
import ToolList from "@/components/ToolList";
import KeyboardNavigation from "@/Hooks/KeyboardShortcuts";

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
