import { CircleCheck } from "lucide-react";
import OneSession from "@/Layout/OrderSession";
import TenSession from "@/Layout/OrderSessionPack";
import { Link } from "react-router-dom";

function PriceCard() {
  return (
    <>
      <div className=" mx-auto w-full md:w-1k place-items-center grid grid-cols-1 gap-2 items-center  md:grid-cols-2 ">
        <div className="dark:bg-black dark:border-white/[0.2] bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10  lg:mx-0 border border-transparent h-full flex flex-col justify-between">
          <div className="">
            <h3
              id="tier-free"
              className="text-gold text-base font-semibold leading-7"
            >
              Per Session
            </h3>
            <p className="mt-4 gap-x-2">
              <span className="text-gray-400 text-sm block h-6 dark:text-white"></span>
              <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                &#8369;69/Session
              </span>
            </p>
            <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
              Progress in badminton with each session, one at a time.
            </p>
            <ul
              role="list"
              className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
            >
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Fundamentals
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Footwork Movement
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Group Training
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Strategies
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Fitness and Conditioning
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-primary size-5" />
                Basic to Advance (progression after multiple sessions)
              </li>
            </ul>
          </div>
          <div>
            <OneSession />
            <Link to="/contact">
              <button className="text-xs text-neutral-500 mt-2 text-left">
                Questions?
              </button>
            </Link>
          </div>
        </div>
        <div className="relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  shadow-2xl rounded-3xl px-6 py-8 ring-1 ring-gray-900/10  lg:mx-0 border border-transparent h-full flex flex-col justify-between">
          <div className="">
            <h3
              id="tier-pages-page"
              className="text-gold text-base font-semibold leading-7"
            >
              10 Sessions Package
            </h3>
            <p className="mt-4 gap-x-2">
              <span className="text-gray-400 dark:text-white text-sm block h-6 dark:text-white">
                pause or cancel anytime
              </span>
              <span className="text-white text-4xl font-bold tracking-tight dark:text-white">
                &#8369;659/10sessions
              </span>
            </p>
            <p className="text-gray-300 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
              Unlock your full potential with hassle-free, discounted training
              sessions.
            </p>
            <ul
              role="list"
              className="text-gray-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
            >
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Fundamentals
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Footwork Movement
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Group Training
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Strategies
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Competitive Competition
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Fitness and Conditioning
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                24-hour support response time
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Contact over chat for support
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="text-gold size-5" />
                Pause or cancel anytime
              </li>
            </ul>
          </div>
          <div>
            <TenSession />
            <Link to="/contact">
              <button className="text-xs mt-2 text-left text-neutral-200">
                Questions?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default PriceCard;
