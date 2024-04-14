import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/global.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import Routers from "./routes";
import ClerkAuth from "./Layout/Clerk";
import PagesRouteRules from "./Layout/PagesRouteRules";

const App = () => {
  return (
    <React.StrictMode>
      <ClerkAuth>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <PagesRouteRules>
            <Routers />
          </PagesRouteRules>
        </ThemeProvider>
      </ClerkAuth>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);
