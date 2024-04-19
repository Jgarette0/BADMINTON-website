import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function OneSession() {
  const [userInput, setUserInput] = useState("");
  const confirmation = `Php 69 | One Session\n\n Name: ${userInput}`;
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className=" text-primary border bg-secondary hover:bg-primary-foreground mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
          Book Now
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Booking Confirmation</DrawerTitle>
            <DrawerDescription>Enter your name to confirm</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2 ">
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  &#8369;69
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  One Session
                </div>
              </div>
            </div>
            <div className="mt-3 h-[120px]">
              <div className="grid gap-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Mitch Andrew"
                />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <a
              href={`http://m.me/137783286078380?text=${encodeURIComponent(
                confirmation
              )}`}
            >
              <Button className="relative w-full group">
                <span>Submit</span>
                <img
                  src="img/messenger.png"
                  className="absolute right-4 transition-transform duration-300 ease-in-out group-hover:rotate-360"
                  alt=":"
                />
              </Button>
            </a>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
export default OneSession;
