import ToolList from "@/Layout/ToolList";
import { Suspense, lazy } from "react";
const Congratulations = lazy(() => import("@/pages/Options/Congratulations"));
function Congratulation() {
  return (
    <>
      <Suspense>
        <div className="w-screen h-full ">
          <Congratulations />
          <ToolList />
        </div>
      </Suspense>
    </>
  );
}
export default Congratulation;
