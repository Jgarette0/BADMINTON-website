import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import PagesRouter from "./HeaderRouter";
import SidebarRoute from "./Sidebar";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row border justify-between border-red-300 gap-2 sticky">
        <NavLink to="/">
          <img src="vite.svg" alt="Logo" />
        </NavLink>

        <div className="md:hidden">
          <SidebarRoute />
        </div>

        <div className=" flex-col md:flex-row hidden gap-8 place-items-center justify-center md:flex">
          <PagesRouter />
          <Button>Sign in</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
