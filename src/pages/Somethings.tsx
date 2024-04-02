import { buttonVariants } from "@/components/ui/button";
import { NavLink, Outlet } from "react-router-dom";

export const SomethingsPage = () => {
  const somethings = [
    "Button",
    "Card",
    "Dialog",
    "Layout Grid",
    "Spotlight",
    "Text Generate Effect",
  ];

  return (
    <>
      <div className="flex flex-row gap-12 border">
        <div className="flex flex-col border border-red-300 gap-2 sticky">
          {somethings.map((item) => (
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? ` text-primary underline-offset-4 hover:underline text-xl font-semibold pr-12 border`
                  : `text-primary underline-offset-4 hover:underline text-xl opacity-70 pr-12 border`;
              }}
              key={item}
              to={`/somethings/${item}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
        <div className="border border-blue-400">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SomethingsPage;
