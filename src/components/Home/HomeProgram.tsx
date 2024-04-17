import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import PricingDialog from "../Auth/PricingDialog";
import PriceCard from "./PricingCard";
import PriceCardblur from "./PriceCardBlur";

function HomeProgram() {
  return (
    <>
      <div className="flex flex-wrap w-full mb-8 md:mb-20 flex-col items-center text-center mt-8">
        <h1 className="font-medium title-font mb-2 font-dahlia text-6xl ">
          OUR PROGRAM
        </h1>
        <p className="lg:w-1/2 w-full leading-none text-xl font-mona">
          Explore our program's benefits and more details.
        </p>

        <div className="flex justify-center py-8 md:py-12">
          <Link to="/program">
            <Button
              className="font-mona transition-all duration-400 ease-in-out text-sm py-4 px-8 font-semibold md:py-8 hover:bg-primary hover:text-secondary md:px-12 md:text-lg "
              variant="secondary"
            >
              Explore
            </Button>
          </Link>
        </div>
        <div className=" flex-col place-items-center relative hidden md:flex">
          <SignedOut>
            <div className="z-100 flex flex-col place-items-center relative">
              <PriceCardblur />
              <div className="flex flex-col top-1/3 mx-auto absolute">
                <PricingDialog />
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <PriceCard />
          </SignedIn>
        </div>
      </div>
    </>
  );
}
export default HomeProgram;
