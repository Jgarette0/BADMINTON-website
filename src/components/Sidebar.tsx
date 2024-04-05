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
import { AlignRight, ChevronRight } from "lucide-react";

import { Link } from "react-router-dom";
import DarkMode from "./Darkmode";
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
        <div className="flex flex-col w-full h-8  justify-center">
          <hr />
        </div>
        <SheetFooter>
          <div className=" w-full mt-4">
            <SheetClose asChild>
              <Button className="text-xl w-full py-7 rounded-full font-semibold">
                Sign In
              </Button>
            </SheetClose>
          </div>
          <div className="flex flex-col w-full h-8  justify-center">
            <hr />
          </div>
          <div className="flex-col md:hidden justify-center flex place-items-center mt-4 gap-2">
            {pages.map((item) => (
              <Link to={`/${item}`}>
                <SheetClose asChild>
                  <Button
                    className="text-xl font-semibold opacity-85 flex flex-row justify-between w-72 hover:scale-105"
                    variant="ghost"
                  >
                    <div>{item}</div>
                    <div>
                      <ChevronRight />
                    </div>
                  </Button>
                </SheetClose>
              </Link>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default SidebarRoute;
