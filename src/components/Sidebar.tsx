import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

import { Link } from "react-router-dom";
import DarkMode from "./Darkmode";

export function SidebarRoute() {
  const pages = ["Home", "Program", "Gallery", "About"];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col place-items-start gap-4">
          <span>
            <DarkMode />
          </span>
          <Link to="/">
            <SheetClose asChild>
              <div className="flex flex-row place-items-baseline gap-2 justify-center">
                <img src="vite.svg" alt="" />
                <SheetTitle>AB BADMINTON</SheetTitle>
              </div>
            </SheetClose>
          </Link>
          <SheetDescription className="">
            Navigate your dreams through Sports
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <div className="flex-col md:hidden pl-2 justify-center flex place-items-start mt-4">
            {pages.map((item) => (
              <Link to={`/${item}`}>
                <SheetClose asChild>
                  <Button
                    className="text-xl font-semibold opacity-85"
                    variant="link"
                  >
                    {item}{" "}
                  </Button>
                </SheetClose>
              </Link>
            ))}
          </div>
          {/* <div className="flex-col md:hidden pr-2 justify-center flex border place-items-end">
            <Link to="/">
              <SheetClose asChild>
                <Button
                  className="text-xl font-semibold opacity-85"
                  variant="link"
                >
                  Home
                </Button>
              </SheetClose>
            </Link>
            <Link to="/Program">
              <SheetClose asChild>
                <Button
                  className="text-xl font-semibold opacity-85"
                  variant="link"
                >
                  Program
                </Button>
              </SheetClose>
            </Link>
            <Link to="/Gallery">
              <SheetClose asChild>
                <Button
                  className="text-xl font-semibold opacity-85"
                  variant="link"
                >
                  Gallery
                </Button>
              </SheetClose>
            </Link>
            <Link to="/About">
              <SheetClose asChild>
                <Button
                  className="text-xl font-semibold opacity-85"
                  variant="link"
                >
                  About
                </Button>
              </SheetClose>
            </Link>
          </div> */}
        </SheetFooter>
        <div className=" fixed bottom-4 right-14">
          <SheetClose asChild>
            <Button className="text-xl font-semibold py-6 px-16">
              Sign In
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default SidebarRoute;
