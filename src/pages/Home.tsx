import { lazy, Suspense } from "react";
import Spotlight from "@/components/ui/spotlight";
import LoadingSpinner from "@/Layout/LoadingSpinner";
import LayoutGridDemo from "@/components/Home/ImageLayout";
import Qoute from "@/components/Home/Qoute";
const HomeTitle = lazy(() => import("@/components/Home/Hometitle"));
const AboutSection = lazy(() => import("@/components/Home/HomeAbout"));
const HomeProgram = lazy(() => import("@/components/Home/HomeProgram"));
const InfiniteMovingCardsDemo = lazy(
  () => import("@/components/Home/ImageInfinite")
);
const LocationHome = lazy(() => import("@/components/Home/LocationHome"));
const Hero = lazy(() => import("@/components/Home/Hero"));
const Footer = lazy(() => import("@/components/Footer/Footer"));

const HomePage = () => {
  return (
    <>
      <div className="md:w-1k px-4 flex flex-col place-items-center border-none">
        <Spotlight />
        <HomeTitle />
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <InfiniteMovingCardsDemo />
        <AboutSection />
        <Hero />
        <LayoutGridDemo />
        <HomeProgram />
        <Qoute />
        <LocationHome />
        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;
