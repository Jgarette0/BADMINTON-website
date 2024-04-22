import AccordionFaqs from "@/Layout/AccordionFaqs";
import ContactLinks from "@/Layout/ContactLinks";
import RulesTerms from "@/Layout/Rules";
import Footer from "@/components/Footer/Footer";
import LocationHome from "@/components/Home/LocationHome";

function SupportPage() {
  return (
    <>
      <div className="flex flex-col w-full md:w-1k gap-8 place-items-center">
        <h1 className="font-dahlia mt-20 md:text-10xl text-3xl">SUPPORT :</h1>
        <AccordionFaqs />
        <RulesTerms />
        <ContactLinks />
        <LocationHome />
        <Footer />
      </div>
    </>
  );
}
export default SupportPage;
