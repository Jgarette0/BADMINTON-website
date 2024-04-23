import LoadingSpinnerSmall from "@/Layout/LoadingSpinnerSmall";
import PricingDialog from "@/components/Auth/PricingDialog";
import Footer from "@/components/Footer/Footer";
import PriceCardblur from "@/components/Home/PriceCardBlur";
import PriceCard from "@/components/Home/PricingCard";
import ProgramHeader from "@/components/Program/ProgramHeader";
import ProgramHero from "@/components/Program/ProgramHero";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Suspense } from "react";

export const ProgramPage = () => {
  return (
    <>
      <ProgramHeader />
      <Suspense fallback={<LoadingSpinnerSmall />}>
        <ProgramHero />

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
        <Footer />
      </Suspense>
    </>
  );
};

export default ProgramPage;
