import { NavLink } from "react-router-dom";

export const PagesRouter = () => {
  const navbar = ["About", "Gallery", "Program"];

  return (
    <>
      {navbar.map((item) => (
        <NavLink
          className={({ isActive }) => {
            return isActive ? ` font-bold text-xl` : `font-semibold text-xl`;
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
