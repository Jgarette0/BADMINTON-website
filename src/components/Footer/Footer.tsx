// import { ExternalLink, Facebook, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import PreferencePop from "@/Layout/Preference";
import ShareLink from "@/Layout/Share";
function Footer() {
  const [userInput, setUserInput] = useState("");
  const confirmation = `Messege:\n${userInput}`;
  return (
    <footer className="bg-secondary w-full mt-20 rounded-t-lg">
      <div className="flex md:flex-row flex-col w-full place-items-center ">
        <div className=" md:w-1/2 flex flex-row w-screen h-[350px] md:h-[500px] md:gap-4 gap-0 ">
          <div className=" w-1/2 flex flex-col place-items-center gap-4 md:gap-6  ">
            <div className="flex flex-col place-items-start gap-4 md:gap-6">
              <div className=" font mona font-bold text-xl md:text-2xl md:py-8 py-6 tracking-wider cursor-default select-none mt-12 md:mt-20">
                Options
              </div>
              <PreferencePop />
              <Link to="/docs">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Docs
                </div>
              </Link>
              <Link to="/terms">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Terms
                </div>
              </Link>
              <Link to="/support">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Support
                </div>
              </Link>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col place-items-center gap-4 md:gap-6">
            <div className="flex flex-col place-items-start gap-4 md:gap-6">
              <div className=" font mona font-bold text-xl md:text-2xl md:py-8 py-6 tracking-wider cursor-default select-none mt-12 md:mt-20">
                Services
              </div>
              <Link to="/program">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Programs
                </div>
              </Link>
              <Link to="/team">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Team
                </div>
              </Link>
              <Link to="/payment">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Payment
                </div>
              </Link>
              <Link to="/shop">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Shop
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 flex flex-row w-screen h-[350px] md:h-[500px] md:gap-4 gap-0 ">
          <div className=" w-1/2 flex flex-col place-items-center gap-4 md:gap-6">
            <div className="flex flex-col place-items-start gap-4 md:gap-6">
              <div className=" font mona font-bold text-xl md:text-2xl md:py-8 py-6 tracking-wider cursor-default select-none mt-12 md:mt-20">
                Contact Us
              </div>
              <a href="tel:0966180854">
                <div className="group/item  tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80 flex flex-row gap-1 relative pr-7">
                  0966180854
                  <ExternalLink className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform duration-300 ease-in-out h-5 absolute right-0" />
                </div>
              </a>
              <a href="https://web.facebook.com/profile.php?id=61557379647439">
                <div className="group/item  tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80 flex flex-row gap-1 relative pr-7">
                  Facebook
                  <ExternalLink className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform duration-300 ease-in-out h-5 absolute right-0" />
                </div>
              </a>
              <a href="mailto:androxgaming17@gmail.com">
                <div className="group/item  tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80 flex flex-row gap-1 relative pr-7">
                  Gmail
                  <ExternalLink className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform duration-300 ease-in-out h-5 absolute right-0" />
                </div>
              </a>
              <Link to="/location">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Location
                </div>
              </Link>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col place-items-center gap-4 md:gap-6">
            <div className="flex flex-col place-items-start gap-4 md:gap-6">
              <div className=" font mona font-bold text-xl md:text-2xl md:py-8 py-6 tracking-wider cursor-default select-none mt-12 md:mt-20">
                Others
              </div>
              <Link to="/faq">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  FAQs
                </div>
              </Link>
              <Link to="/blog">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Blog
                </div>
              </Link>
              <ShareLink />
              <a href="https://dev.pinamungajan.com">
                <div className="group/item  tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80 flex flex-row gap-1 relative pr-7">
                  dev
                  <ExternalLink className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform duration-300 ease-in-out h-5 absolute right-0" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
            <Input
              className="sm:w-64 w-40 sm:mr-4 mr-2 outline-ring py-2 px-4  rounded-sm"
              placeholder="Message"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <a
              href={`http://m.me/61557379647439?text=${encodeURIComponent(
                confirmation
              )}`}
            >
              <button className="inline-flex text-secondary bg-primary py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-sm">
                Send
              </button>
            </a>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
              Please allow us some time to carefully review your message.
              <br className="lg:block hidden" />
              We will get back to you shortly.
            </p>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a
              href={`http://m.me/61557379647439`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
            >
              <img
                src="img/messenger.png"
                className="transition-all hover:scale-150 duration-200 ease-in hover:rotate-45"
                alt=""
              />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61557379647439"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <img
                src="img/facebook.png"
                className="transition-all hover:scale-150 duration-200 ease-in hover:rotate-45"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <img
                src="img/instagram.png"
                className="transition-all hover:scale-150 duration-200 ease-in hover:rotate-45"
                alt=""
              />
            </a>
          </span>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 AB —
            <a
              href="https://web.facebook.com/profile.php?id=61557379647439"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              BADMINTON
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            @jgrt
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
