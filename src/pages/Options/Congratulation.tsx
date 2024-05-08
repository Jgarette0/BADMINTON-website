import ToolList from "@/Layout/ToolList";
import { Suspense, lazy } from "react";
const Congratulations = lazy(() => import("@/pages/Options/Congratulations"));
function Congratulation() {
  return (
    <>
     <Suspense>
     <Congratulations />
     </Suspense>
      <ToolList />
    </>
  );
}
export default Congratulation;
