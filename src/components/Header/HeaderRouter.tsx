import { NavLink } from "react-router-dom";

export const PagesRouter = () => {
  const navbar = ["About", "Gallery", "Program"];

  return (
    <>
      {navbar.map((item) => (
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? ` font-semibold text-md font-mona opacity-90 select-none`
              : ` text-md hover:opacity-70 font-mona font-semibold opacity-90 select-none`;
          }}
          key={item}
          to={`/${item}`}
        >
          {item}
        </NavLink>
      ))}
    </>
  );
};

export default PagesRouter;
