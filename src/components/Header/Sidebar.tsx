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

import { Link, NavLink } from "react-router-dom";
import DarkMode from "../Darkmode";
import { ScrollArea } from "../ui/scroll-area";
// import { Card } from "./ui/card";

export function SidebarRoute() {
  const pages = [
    "Home",
    "Program",
    "Gallery",
    "About",
    "FAQs",
    "Blog",
    "Contact",
    "Shop",
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight size={28} strokeWidth={1.25} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col place-items-start gap-4 ">
          <div className="h-8">
            <DarkMode />
          </div>
          <Link to="/">
            <SheetClose asChild>
              <div className="flex flex-row place-items-end gap-2 justify-center">
                <img src="img/abbs.png" className="w-12 h-12" alt="" />
                <SheetTitle className="text-gold text-4xl">
                  BADMINTON
                </SheetTitle>
              </div>
            </SheetClose>
          </Link>
          <SheetDescription className=" flex flex-col place-items-center w-full">
            Navigate your dreams through Sports
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col w-full h-8 pt-5">
          <hr />
        </div>
        <SheetFooter>
          <div className="mx-auto mt-4">
            <SheetClose asChild>
              <Button className=" mx-auto py-8 px-8 rounded-full font-semibold font-mona text-lg">
                Sign In
              </Button>
            </SheetClose>
          </div>
          <div className="flex flex-col w-full h-1  justify-center">
            <hr />
          </div>
          <ScrollArea className="h-[444px]">
            <div className="flex-col md:hidden justify-center flex place-items-center mt-4 gap-2">
              {pages.map((item) => (
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) => {
                    return isActive
                      ? `transition-transform duration-300 ease-in-out transform opacity-40 scale-90`
                      : `  hover:opacity-70`;
                  }}
                >
                  <SheetClose asChild>
                    <Button
                      className="text-lg font-semibold opacity-85 flex flex-row justify-center w-72 hover:opacity-90 py-11 px-8 font-mona "
                      variant="secondary"
                    >
                      <div>{item.toUpperCase()}</div>
                      {/* <div><ChevronRight className="w-4" /></div> */}
                    </Button>
                  </SheetClose>
                </NavLink>
              ))}
            </div>
          </ScrollArea>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default SidebarRoute;
