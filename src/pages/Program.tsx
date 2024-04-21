import PricingDialog from "@/components/Auth/PricingDialog";
import PriceCardblur from "@/components/Home/PriceCardBlur";
import PriceCard from "@/draft/03card";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export const ProgramPage = () => {
  return (
    <>
      <div className=" flex-col place-items-center relative md:flex">
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
    </>
  );
};

export default ProgramPage;
