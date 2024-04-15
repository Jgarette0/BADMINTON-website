import { Card } from "../ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  PencilRuler,
  Flame,
  Lightbulb,
  HeartPulse,
  Brain,
  Book,
} from "lucide-react";

function Hero() {
  return (
    <>
      <section className=" body-font">
        <div className="container px-5 py-16 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-8 md:mb-20 flex-col items-center text-center">
            <h1 className="font-medium title-font mb-2 font-dahlia text-6xl ">
              OUR FOCUS AREAS
            </h1>
            <p className="lg:w-1/2 w-full leading-none text-xl font-mona">
              A Comprehensive Overview of AB Badminton
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <CardContainer className="inter-var">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1 w-auto  h-auto rounded-xl  ">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Card className="p-6 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 text-blue-800 inline-flex items-center justify-center rounded-full  mb-4">
                        <PencilRuler />
                      </div>
                      <h2 className="text-lg  title-font font-semibold mb-2">
                        Basic Badminton Techniques
                      </h2>
                      <p className="leading-relaxed text-base">
                        Fundamental skills such as grip, footwork, and strokes
                        to provide a strong foundation for players.
                      </p>
                    </Card>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <CardContainer className="inter-var">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1 w-auto  h-auto rounded-xl  ">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Card className="p-6 rounded-lg">
                      <div className="w-10 h-10  text-red-800  bg-red-200 inline-flex items-center justify-center rounded-full  mb-4">
                        <Flame />
                      </div>
                      <h2 className="text-lg  title-font font-semibold mb-2">
                        Advanced Shot Techniques
                      </h2>
                      <p className="leading-relaxed text-base">
                        Focuses on mastering advanced shots like drops, smashes,
                        and drives, enhancing players' offensive and defensive
                        capabilities.
                      </p>
                    </Card>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <CardContainer className="inter-var">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1 w-auto  h-auto rounded-xl  ">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Card className="p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center text-yellow-500 bg-yellow-100 rounded-full  mb-4">
                        <Lightbulb />
                      </div>
                      <h2 className="text-lg  title-font font-semibold mb-2">
                        Strategy and Tactics
                      </h2>
                      <p className="leading-relaxed text-base">
                        Teaches players how to analyze opponents, adapt
                        gameplay, and use strategic tactics to gain a
                        competitive edge.
                      </p>
                    </Card>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <CardContainer className="inter-var">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1 w-auto  h-auto rounded-xl  ">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Card className="p-6 rounded-lg">
                      <div className="w-10 h-10 text-pink-800 bg-pink-100 inline-flex items-center justify-center rounded-full  mb-4">
                        <HeartPulse />
                      </div>
                      <h2 className="text-lg  title-font font-semibold mb-2">
                        Fitness and Conditioning
                      </h2>
                      <p className="leading-relaxed text-base">
                        Aims to improve players' overall fitness, agility, and
                        stamina through specific badminton-focused exercises and
                        drills.
                      </p>
                    </Card>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <CardContainer className="inter-var">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1 w-auto  h-auto rounded-xl  ">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Card className="p-6 rounded-lg">
                      <div className="w-10 h-10 text-green-800 bg-green-100 border inline-flex items-center justify-center rounded-full  mb-4">
                        <Brain />
                      </div>
                      <h2 className="text-lg  title-font font-semibold mb-2">
                        Mental Toughness and Focus
                      </h2>
                      <p className="leading-relaxed text-base">
                        Helps players develop mental resilience, concentration,
                        and focus, crucial for maintaining composure during
                        matches.
                      </p>
                    </Card>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <CardContainer className="inter-var">
                <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1 w-auto  h-auto rounded-xl  ">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Card className="p-6 rounded-lg">
                      <div className="w-10 h-10 text-purple-800 bg-purple-100 inline-flex items-center justify-center rounded-full  mb-4">
                        <Book />
                      </div>
                      <h2 className="text-lg  title-font font-semibold mb-2">
                        Rules and Regulations
                      </h2>
                      <p className="leading-relaxed text-base">
                        Covers the official rules of badminton, ensuring players
                        understand and play the game correctly and ethically.
                      </p>
                    </Card>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
