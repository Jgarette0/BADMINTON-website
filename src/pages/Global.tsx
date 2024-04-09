import Header from "@/components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./Home";
import ToolList from "@/components/ToolList";

export const GlobalPage = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" && <HomePage />}
      <Outlet />
      <ToolList />
    </>
  );
};

export default GlobalPage;
