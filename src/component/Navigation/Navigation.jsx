import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <aside className="w-64 bg-zinc-300">
      <p>
        <span className="text-[#F7542E]">Dev</span>challenges.io
      </p>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Colors</NavLink>
          </li>
          <li>
            <NavLink to="/">Typography</NavLink>
          </li>
          <li>
            <NavLink to="/">Spaces</NavLink>
          </li>
          <li>
            <NavLink to="/button">Buttons</NavLink>
          </li>
          <li>
            <NavLink to="/input">Inputs</NavLink>
          </li>
          <li>
            <NavLink to="/">Grid</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
