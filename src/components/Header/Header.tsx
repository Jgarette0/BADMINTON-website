import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import PagesRouter from "./HeaderRouter";
import SidebarRoute from "./Sidebar";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between h-20 md:w-1k m-auto gap-2 sticky place-items-center bg-transparent">
        <NavLink to="/">
          <img
            src="abbs.png"
            className="w-16 h-16 transition-transform duration-500 ease-in-out hover:-rotate-12"
            alt="Logo"
          />
        </NavLink>

        <div className="md:hidden">
          <SidebarRoute />
        </div>

        <div className=" flex-col md:flex-row hidden gap-8 place-items-center justify-center md:flex">
          <PagesRouter />
          <Button className="text-lg rounded-full pt-6 pb-7 text-center px-7 font-semibold">
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
