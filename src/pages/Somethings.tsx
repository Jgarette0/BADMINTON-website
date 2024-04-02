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
        <div className="flex flex-col border border-red-300 gap-2">
          {somethings.map((item) => (
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? ` ${buttonVariants({
                      variant: "link",
                    })} text-xl font-semibold `
                  : `${buttonVariants({
                      variant: "link",
                    })} text-xl opacity-70 `;
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
