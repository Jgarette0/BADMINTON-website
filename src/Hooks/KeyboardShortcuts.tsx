import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KeyboardNavigation = () => {
  const navigate = useNavigate();

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
        window.open("https://dev.pinamungajan.com", "_blank");
      } else if ((event.metaKey || event.shiftKey) && key === "z") {
        navigate("/signin");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return null;
};

export default KeyboardNavigation;
