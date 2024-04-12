import KeyboardNavigation from "@/Hooks/KeyboardShortcuts";
import ToolList from "@/Layout/ToolList";
import Header from "@/components/Header/Header";
import { Card } from "@/components/ui/card";

function Draft() {
  return (
    <>
      <Header />
      <KeyboardNavigation />
      <ToolList />
      <Card className="w-screen h-screen absolute flex flex-col place-items-center justify-center bg-yellow-50">
        <a href="http://m.me/61557379647439?text=Hello%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome%20and%20Welcome">
          Chat with Messenger
        </a>
      </Card>
    </>
  );
}
export default Draft;
