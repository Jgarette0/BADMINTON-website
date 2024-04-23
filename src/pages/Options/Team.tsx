import Footer from "@/components/Footer/Footer";
import { LocateIcon, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
export function TeamPage() {
  return (
    <>
      <div className="flex flex-col w-full place-content-center">
        <div className="md:h-80 h-28 w-full text-center flex flex-col place-items-center justify-end md:justify-center font-dahlia md:text-11xl text-5xl opacity-80 hover:opacity-100">
          Our Team
        </div>
        <main className="text-gray-700 body-font  bg-white">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full rounded-full bg-secondary transition-colors duration-500 ease-in-out hover:bg-primary"
                src="../img/coach.png"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5">
                  <User />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3 font bold font-poppins">
                    Head Coach
                  </h2>
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Mitch Andrew Tundag
                  </h2>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5">
                  <Phone />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Contact
                  </h2>
                  <p className="leading-relaxed text-base">
                    For coaching inquiries or to schedule a session with Coach
                    Mitch Andrew, contact us at{" "}
                    <a
                      href="mailto: anddroxgaming17@gmail.com"
                      className="underline hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-90"
                    >
                      Email
                    </a>{" "}
                    or
                    <a
                      href="tel: 09661808654"
                      className="underline hover:scale-110 transition-all duration-300 ease-in-out hover:opacity-90"
                    >
                      {" "}
                      Call us
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5">
                  <LocateIcon />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Address
                  </h2>
                  <p className="leading-relaxed text-base">
                    Pandacan, Pinamungajan, Cebu.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-3 text-primary inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default TeamPage;
