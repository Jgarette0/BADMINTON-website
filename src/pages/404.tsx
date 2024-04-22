import KeyboardNavigation from "@/Hooks/KeyboardShortcuts";
import Header from "@/components/Header/Header";
import ToolList from "@/Layout/ToolList";

function NotFound() {
  return (
    <>
      <Header />
      <KeyboardNavigation />
      <ToolList />
      <div className="absolute top-72 md:-top-12 md:scale-50">
        <img src="img/7.png" alt="" />
      </div>
    </>
  );
}
export default NotFound;
