import ToolList from "@/Layout/ToolList";
import { Suspense, lazy } from "react";
const Congratulations = lazy(() => import("@/pages/Options/Congratulations"));
function Congratulation() {
  return (
    <>
      <div className="w-screen h-full ">
        <Suspense>
          <Congratulations />
        </Suspense>
        <ToolList />
      </div>
    </>
  );
}
export default Congratulation;
