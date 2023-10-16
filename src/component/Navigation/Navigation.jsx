import { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "../../../public/hamburger.svg";
import CloseIcon from "../../../public/close.svg";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <aside className="w-full p-4 md:pt-12 md:w-64 bg-FAFBFD">
      <div className="flex justify-between">
        <p className="text-[13px]">
          <span className="text-[#F7542E] font-poppins font-semibold">Dev</span>
          challenges.io
        </p>
        {!showMenu && (
          <img
            src={HamburgerIcon}
            alt="hamburger-icon"
            className="cursor-pointer md:hidden"
            onClick={() => setShowMenu(true)}
          />
        )}
        {showMenu && (
          <img
            src={CloseIcon}
            alt="close-icon"
            className="cursor-pointer md:hidden"
            onClick={() => setShowMenu(false)}
          />
        )}
      </div>
      <nav className={`${!showMenu && "hidden"} md:block mt-10 md:mt-[122px]`}>
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
