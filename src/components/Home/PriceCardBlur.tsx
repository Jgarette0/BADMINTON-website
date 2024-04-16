import { CircleCheck } from "lucide-react";

function PriceCardblur() {
  return (
    <>
      <div className="blur-md mx-auto w-1k place-items-center grid grid-cols-1 gap-4 items-center  md:grid-cols-2 xl:grid-cols-3">
        <div className="dark:bg-black dark:border-white/[0.2] bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
          <div className="">
            <h3
              id="tier-free"
              className="text-gold text-base font-semibold leading-7"
            >
              Existing Components
            </h3>
            <p className="mt-4 gap-x-2">
              <span className="dark:text-white text-gray-400 text-sm block h-6 dark:text-white">
                {" "}
              </span>
              <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                Free
              </span>
            </p>
            <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
              All the components that are freely available on the website are
              free to use.
            </p>
            <ul
              role="list"
              className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
            >
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />A growing library
                of awesome components
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                React / Next.js / Tailwind CSS code
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Serves a wide variety of audience.
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                MIT Licence. Personal or commercial projects.
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Contact over chat for support
              </li>
            </ul>
          </div>
          <div>
            <button
              aria-describedby="tier-free"
              className="text-gold ring-1 ring-inset ring-gold hover:ring-gold focus-visible:outline-gold mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
            >
              Browse Components
            </button>
            <button className="text-xs text-neutral-500 mt-2 text-left">
              Questions?
            </button>
          </div>
        </div>
        <div className="dark:bg-black dark:border-white/[0.2] bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
          <div className="">
            <h3
              id="tier-components-page"
              className="text-gold text-base font-semibold leading-7"
            >
              Custom Components
            </h3>
            <p className="mt-4 gap-x-2">
              <span className="dark:text-white text-gray-400 text-sm block h-6 dark:text-white">
                pause or cancel anytime
              </span>
              <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                $3499/mo
              </span>
            </p>
            <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
              Standalone components tailored to your needs and easily
              integrated. Perfect for website elements or sections.
            </p>
            <ul
              role="list"
              className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
            >
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                One component at a time
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                React / Next.js / Tailwind CSS code
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Design + Development
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Unlimited Revisions
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                24-hour support response time
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Private communication channel
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                4-7 days turnaround time
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Pause or cancel anytime
              </li>
            </ul>
          </div>
          <div>
            <button
              aria-describedby="tier-components-page"
              className="text-gold ring-1 ring-inset ring-gold hover:ring-gold focus-visible:outline-gold mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
            >
              Buy Now
            </button>
            <button className="text-xs text-neutral-500 mt-2 text-left">
              Questions?
            </button>
          </div>
        </div>
        <div className="relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  shadow-2xl rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
          <div className="">
            <h3
              id="tier-pages-page"
              className="text-gold text-base font-semibold leading-7"
            >
              Pages
            </h3>
            <p className="mt-4 gap-x-2">
              <span className="text-gray-400 dark:text-white text-sm block h-6 dark:text-white">
                pause or cancel anytime
              </span>
              <span className="text-white text-4xl font-bold tracking-tight dark:text-white">
                $4995/mo
              </span>
            </p>
            <p className="text-gray-300 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
              Best for early-stage startups and businesses that need a marketing
              site and ongoing developmental work.
            </p>
            <ul
              role="list"
              className="text-gray-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
            >
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                One request / page at a time
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                React / Next.js / Tailwind CSS code
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Design + Development
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Unlimited Revisions
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                CMS integration
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Search Engine Optimization
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                24-hour support response time
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Private communication channel
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                7-10 days turnaround time
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Pause or cancel anytime
              </li>
            </ul>
          </div>
          <div>
            <button
              aria-describedby="tier-pages-page"
              className="bg-yellow-500 text-secondary shadow-sm hover:bg-gold focus-visible:outline-gold mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
            >
              Buy Now
            </button>
            <button className="text-xs mt-2 text-left text-neutral-200">
              Questions?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PriceCardblur;
