import { Link } from "react-router-dom";

function LoacationPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col place-items-center justify-center gap-8 rounded-md absolute">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6231.732363034202!2d123.58666148425318!3d10.282078395995605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a96f9b97ad5239%3A0x587a7e7b0c947ed7!2sPinamungahan%20Badminton%20Court!5e0!3m2!1sen!2sph!4v1711533457772!5m2!1sen!2sph"
          className=" absolute"
        ></iframe>
        <div className="flex flex-row gap-12 p-8">
          <Link to="/">
            <button className="fixed bottom-4 md:bottom-8 left-4 md:left-8 p-8 w-64 h-24 hover:opacity-80 text-lg font-mona font-semibold bg-secondary rounded-full ">
              Go back
            </button>
          </Link>
          <Link to="/contact">
            <button className="fixed top-4 md:top-8 right-4 md:right-8 p-8 w-64 h-24 hover:opacity-80 text-lg font-mona font-semibold bg-primary-foreground rounded-full ">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoacationPage;
