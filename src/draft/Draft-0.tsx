import KeyboardNavigation from "@/Hooks/KeyboardShortcuts";
import ToolList from "@/Layout/ToolList";
import Header from "@/components/Header/Header";

function DraftNecessary() {
  return (
    <>
      <Header />
      <KeyboardNavigation />
      <ToolList />
    </>
  );
}
export default DraftNecessary;
