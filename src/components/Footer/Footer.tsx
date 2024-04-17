// import { ExternalLink, Facebook, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
function Footer() {
  const [userInput, setUserInput] = useState("");
  const confirmation = `This is a test:\n${userInput}`;
  return (
    <footer className="bg-secondary w-full mt-20 rounded-t-lg">
      <div className="flex md:flex-row flex-col w-full place-items-center ">
        <div className=" md:w-1/2 flex flex-row w-screen h-[400px] md:h-[500px] gap-4 ">
          <div className=" w-1/2 flex flex-col place-items-center gap-4 md:gap-6  ">
            <div className="flex flex-col place-items-start gap-4 md:gap-6">
              <div className=" font mona font-bold text-xl md:text-2xl py-8 tracking-wider cursor-default select-none mt-12 md:mt-20">
                Settings & Option
              </div>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Preference
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Docs
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Terms
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Support
                </div>
              </Link>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col place-items-center gap-4 md:gap-6">
            <div className="flex flex-col place-items-start gap-4 md:gap-6">
              <div className=" font mona font-bold text-xl md:text-2xl py-8 tracking-wider cursor-default select-none mt-12 md:mt-20">
                Services
              </div>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Programs
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Team
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Billing
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Shop
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 flex flex-row w-screen h-[400px] md:h-[500px] gap-4 ">
          <div className=" w-1/2 flex flex-col place-items-center gap-4 md:gap-6">
            <div className="flex flex-col place-items-start gap-4 md:gap-6">
              <div className=" font mona font-bold text-xl md:text-2xl py-8 tracking-wider cursor-default select-none mt-12 md:mt-20">
                Contact Us
              </div>
              <a href="tel:0966180854">
                <div className="group/item  tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80 flex flex-row gap-1 relative pr-7">
                  0966180854
                  <ExternalLink className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform duration-300 ease-in-out h-5 absolute right-0" />
                </div>
              </a>
              <a href="tel:0966180854">
                <div className="group/item  tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80 flex flex-row gap-1 relative pr-7">
                  Facebook
                  <ExternalLink className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform duration-300 ease-in-out h-5 absolute right-0" />
                </div>
              </a>
              <a href="tel:0966180854">
                <div className="group/item  tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80 flex flex-row gap-1 relative pr-7">
                  Gmail
                  <ExternalLink className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform duration-300 ease-in-out h-5 absolute right-0" />
                </div>
              </a>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Location
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Support
                </div>
              </Link>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col place-items-center gap-4 md:gap-6">
            <div className="flex flex-col place-items-start gap-4 md:gap-6">
              <div className=" font mona font-bold text-xl md:text-2xl py-8 tracking-wider cursor-default select-none mt-12 md:mt-20">
                Others
              </div>
              <Link to="/faqs">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  FAQs
                </div>
              </Link>
              <Link to="/blog">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Blog
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Dev
                </div>
              </Link>
              <Link to="/">
                <div className=" tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80">
                  Keyboard Shortcut
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
            <Input
              className="sm:w-64 w-40 rounded sm:mr-4 mr-2 outline-ring py-2 px-4 h-12 -mt-1 rounded-sm"
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
              <button className="inline-flex text-secondary bg-primary py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
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
              href="https://web.facebook.com/mitchandrox"
              target="_blank"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://web.facebook.com/mitchandrox"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://web.facebook.com/mitchandrox"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://web.facebook.com/mitchandrox"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 AB BADMINTON —
            <a
              href="https://twitter.com/andro"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @jgrt
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            AB BADMINTON
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
