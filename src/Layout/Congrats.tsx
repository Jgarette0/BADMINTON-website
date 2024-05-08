import { BackgroundBeams } from "@/components/ui/background-beams";
import Confetti from "react-confetti";
import CongratsImg from "./CongratsImg";

export function Congrats() {
  return (
    <>
      <div className="mt-24 w-screen overflow-hidden bg-white relative flex flex-col items-center gap-12 antialiased">
        <Confetti />
        <div className="max-w-2xl md:max-w-4xl mx-auto p-4">
          <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-green-400  text-center font-sans font-bold leading-none tracking-tighter">
            CONGRATULATIONS
          </h1>
          <h1 className="relative text-7xl md:text-10xl  bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-400  text-center tracking-tight md:tracking-widest leading-none font-extrabold">
            ARIANA
          </h1>
          <p className="text-blue-800 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Congratulations to{" "}
            <a
              href="https://web.facebook.com/ariannareign.makilan"
              target="_blank"
              className="underline"
            >
              Arianna
            </a>{" "}
            for her outstanding performance in the Badminton Single B Elementary
            Semi-finals at CVIRAA! Despite being a first-timer from school
            intramurals to CVIRAA, she showed remarkable determination and
            skill, ultimately winning a bronze medal.
          </p>
        </div>
        <BackgroundBeams />
        <div className="">
          <CongratsImg />
        </div>
      </div>
    </>
  );
}
