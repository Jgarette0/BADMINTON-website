import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Card } from "../ui/card";

function ProgramHero() {
  return (
    <>
      <div className="flex flex-col w-full gap-8 py-4 md:px-2 place-items-center my-12">
        <div className="flex-wrap w-full mt-8  items-center text-center flex flex-col place-items-center justify-center">
          <h1 className="font-medium title-font font-dahlia text-3xl ">
            PROGRAM LEVELS
          </h1>
          <p className="lg:w-1/2 w-full leading-none text-lg font-mona">
            This program caters to beginner, intermediate, and fundamental
            levels.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full gap-8 md:px-8 place-content-center">
          <div className="xl:w-1/3 md:w-1/2 md:p-4 ">
            <CardContainer className="inter-var">
              <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1 w-auto  h-auto rounded-xl  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Card className="p-6 rounded-lg">
                    <h2 className="text-xl  title-font font-semibold mb-2">
                      Beginner
                    </h2>
                    <p className="leading-relaxed text-base">
                      Designed for beginners in order to develop their interest
                      and potential in badminton. Classes will be focused on
                      basic badminton techniques and footwork. Students who show
                      great improvement will advance to higher level program.
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
                    <h2 className="text-xl  title-font font-semibold mb-2">
                      Intermediate
                    </h2>
                    <p className="leading-relaxed text-base">
                      Designed for players who already acquired basic badminton
                      techniques and wanted to continue to pursue their passion
                      for badminton.
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
                    <h2 className="text-xl  title-font font-semibold mb-2">
                      Fundamental
                    </h2>
                    <p className="leading-relaxed text-base">
                      Designed for players who got great talent in badminton.
                      Classes will be focused on more advanced techniques and
                      fitness training. Players at this level are suggested to
                      train at least 2 times per week.
                    </p>
                  </Card>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProgramHero;
