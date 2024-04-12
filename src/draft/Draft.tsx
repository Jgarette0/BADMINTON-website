import { Card } from "@/components/ui/card";
import DraftNecessary from "./Draft-0";
import MessengerChat from "./01MessengerMessege";

function Draft() {
  return (
    <>
      <DraftNecessary />
      <Card className="w-screen h-screen absolute flex flex-col place-items-center justify-center bg-slate-200">
        <MessengerChat />
      </Card>
    </>
  );
}
export default Draft;
