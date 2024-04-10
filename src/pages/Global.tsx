import Header from "@/components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./Home";
import ToolList from "@/components/ToolList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalPage = () => {
  const navigate = useNavigate(); // Define navigate here

  const location = useLocation();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if ((event.metaKey || event.shiftKey) && key === "l") {
        navigate("/location");
      } else if ((event.metaKey || event.shiftKey) && key === "b") {
        navigate("/billing");
      } else if ((event.metaKey || event.shiftKey) && key === "s") {
        navigate("/settings");
      } else if ((event.metaKey || event.shiftKey) && key === "c") {
        navigate("/contact");
      } else if ((event.metaKey || event.shiftKey) && key === "p") {
        navigate("/support");
      } else if ((event.metaKey || event.shiftKey) && key === "t") {
        navigate("/terms");
      } else if ((event.metaKey || event.shiftKey) && key === "d") {
        navigate("/docs");
      } else if ((event.metaKey || event.shiftKey) && key === "h") {
        navigate("/support");
      } else if ((event.metaKey || event.shiftKey) && key === "g") {
        window.open("https://github.com/Jgarette0/BADMINTON-website", "_blank");
      } else if ((event.metaKey || event.shiftKey) && key === "x") {
        window.open("https://badminton.jiliangarette.xyz/developer", "_blank");
      } else if ((event.metaKey || event.shiftKey) && key === "z") {
        navigate("/sign-in");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <>
      <Header />
      {location.pathname === "/" && <HomePage />}
      <Outlet />
      <ToolList />
    </>
  );
};

export default GlobalPage;
