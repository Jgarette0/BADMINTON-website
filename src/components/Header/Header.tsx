import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import PagesRouter from "./HeaderRouter";
import SidebarRoute from "./Sidebar";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between h-20 md:w-1k gap-2 sticky place-items-center bg-transparent w-full ">
        <NavLink to="/">
          <img
            src="img/abbs.png"
            className="w-16 h-16 transition-transform duration-500 ease-in-out hover:-rotate-12"
            alt="Logo"
          />
        </NavLink>

        <div className="md:hidden">
          <SidebarRoute />
        </div>

        <div className=" flex-col md:flex-row hidden gap-8 place-items-center justify-center md:flex">
          <PagesRouter />
          <SignedOut>
            <Link to="/signin">
              <Button
                className="text-md rounded-full py-6 text-center px-7 font-semibold opacity-90 hover:opacity-100  font-mona tracking-tighter"
                variant="default"
              >
                Sign In
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Header;
