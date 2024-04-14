import { ReactNode } from "react";

interface PagesRouteRulesProps {
  children: ReactNode;
}

function PagesRouteRules({ children }: PagesRouteRulesProps) {
  return (
    <div className="flex flex-col place-items-center w-screen md:w-full border border-red px-4 max-1k  overflow-hidden box-border border-none">
      {children}
    </div>
  );
}

export default PagesRouteRules;
