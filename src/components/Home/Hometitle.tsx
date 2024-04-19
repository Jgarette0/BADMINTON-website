import { Suspense, lazy } from "react";
import LoadingSpinner from "@/Layout/LoadingSpinner";
import LoadingSpinnerSmall from "@/Layout/LoadingSpinnerSmall";

const TextGenerateEffect = lazy(() => import("../ui/text-generate-effect"));
const TextAnimation = lazy(() => import("../ui/text-animation"));
const SignedoutBtn = lazy(() => import("./SignedoutBtn"));
const words = `AB BADMINTON TRAINING CAMP`;
const description = ` Discover the passion and skill that drive our players.`;
export function HomeTitle() {
  return (
    <>
      <div className=" text-3xl md:w-1k md:h-auto flex flex-col text-left place-items-center h-auto justify-center opacity-80 hover:opacity-100 select-none md:text-center md:pb-0 ">
        <Suspense fallback={<LoadingSpinner />}>
          <TextGenerateEffect words={words} />
        </Suspense>
      </div>
      <div className="md:h-16 flex flex-col place-items-center justify-center w-full text-xl md:text-3xl z-20 text-center  px-8  h-20">
        <Suspense fallback={<LoadingSpinner />}>
          <TextAnimation words={description} />
        </Suspense>
      </div>
      <div className="h-32 md:h-40 flex flex-col place-items-center justify-center w-full">
        <Suspense fallback={<LoadingSpinnerSmall />}>
          <SignedoutBtn />
        </Suspense>
      </div>
    </>
  );
}
export default HomeTitle;
