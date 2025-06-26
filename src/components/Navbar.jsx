import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-center w-full flex justify-between">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            NS
          </NavLink>

          {/*------------- MENU HAMBURGUER JUST FOR SM--------- */}
          <div className="navbar-center hidden lg:flex border-2">
            <ul className="menu menu-horizontal">
              <NavLinks />
            </ul>
          </div>
          {/*------------- END MENU HAMBURGUER JUST FOR SM--------- */}

          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon */}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* moon icon */}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>

          {/* DROPDOWN */}
          <div className="drawer drawer-end lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="btn btn-primary drawer-button"
              >
                <FaBarsStaggered className="h-6 w-6" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <NavLinks />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
