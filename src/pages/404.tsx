import KeyboardNavigation from "@/Hooks/KeyboardShortcuts";
import Header from "@/components/Header/Header";
import ToolList from "@/components/ToolList";

function NotFound() {
  return (
    <>
      <Header />
      <KeyboardNavigation />
      <ToolList />
      <div>404 Not Found!</div>
    </>
  );
}
export default NotFound;
