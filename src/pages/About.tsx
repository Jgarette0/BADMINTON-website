import AboutUs from "@/components/About/AboutAB";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import Spotlight from "@/components/ui/spotlight";

export const AboutPage = () => {
  return (
    <>
      <Spotlight className="" fill="white" />
      <AboutUs />
      <div className="md:hidden">
        <Hero />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
