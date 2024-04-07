import HomeTitle from "@/components/Home/Hometitle";
import { Card } from "@/components/ui/card";
import Spotlight from "@/components/ui/spotlight";

export const HomePage = () => {
  return (
    <>
      <Card className="md:w-1k px-4 h-screen flex flex-col place-items-center">
        <Spotlight />
        <HomeTitle />
      </Card>
    </>
  );
};

export default HomePage;
