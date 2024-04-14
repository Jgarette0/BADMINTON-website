import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/HomeAbout";
import HomeTitle from "@/components/Home/Hometitle";
import InfiniteMovingCardsDemo from "@/components/Home/ImageInfinite";

import Spotlight from "@/components/ui/spotlight";

export const HomePage = () => {
  return (
    <>
      <div className="md:w-1k px-4 flex flex-col place-items-center border-none">
        <Spotlight />
        <HomeTitle />
      </div>
      <InfiniteMovingCardsDemo />
      <AboutSection />
      <Hero />
    </>
  );
};

export default HomePage;
