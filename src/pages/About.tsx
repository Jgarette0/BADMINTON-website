const AboutUs = lazy(() => import("@/components/About/AboutAB"));
const Footer = lazy(() => import("@/components/Footer/Footer"));
const Hero = lazy(() => import("@/components/Home/Hero"));
const Spotlight = lazy(() => import("@/components/ui/spotlight"));
import LoadingSpinnerSmall from "@/Layout/LoadingSpinnerSmall";
import { Suspense, lazy } from "react";

export const AboutPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinnerSmall />}>
        <Spotlight className="" fill="white" />
        <AboutUs />
        <div className="md:hidden">
          <Hero />
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default AboutPage;
