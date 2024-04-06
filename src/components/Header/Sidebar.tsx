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
        <AlignRight size={40} strokeWidth={1.25} />
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
          <ScrollArea className="h-[450px] rounded-md">
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
          </ScrollArea>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default SidebarRoute;
