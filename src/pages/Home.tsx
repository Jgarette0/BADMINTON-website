import HomeTitle from "@/components/Home/Hometitle";
import { Card } from "@/components/ui/card";
import SpotlightHome from "@/components/ui/spotlighthome";

export const HomePage = () => {
  return (
    <>
      <Card className="md:w-1k px-4 h-screen flex flex-col place-items-center">
        <SpotlightHome />
        <HomeTitle />
      </Card>
    </>
  );
};

export default HomePage;
