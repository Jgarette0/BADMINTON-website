import RulesTerms from "@/Layout/Rules";
import Footer from "@/components/Footer/Footer";
import Vortex from "@/components/ui/vortex";

function TermsPage() {
  return (
    <>
      <span>
        <RulesTerms />
        <Vortex
          backgroundColor="transparent"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <Footer />
        </Vortex>
      </span>
    </>
  );
}
export default TermsPage;
