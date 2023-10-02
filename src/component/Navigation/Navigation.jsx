import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <aside className="w-full p-4 md:pt-12 md:w-64 bg-FAFBFD">
      <p className="mb-10 md:mb-[122px] text-[13px]">
        <span className="text-[#F7542E] font-poppins font-semibold">Dev</span>challenges.io
      </p>
      <nav>
        <ul className="flex flex-col gap-4 text-sm font-thin md:gap-6 font-montserrat">
          <li className="transition duration-150 hover:font-bold">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              Typography
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              Spaces
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buttons"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
              end
            >
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/input"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              Inputs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              Grid
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
