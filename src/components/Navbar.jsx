import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
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
  const [isChecked, setIsChecked] = useState(false);

  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-center w-full flex justify-between">
          {/* LOGO */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            NS
          </NavLink>
          {/* MENU LINKS */}
          <div className="navbar-center hidden lg:flex w-full max-w-md">
            <ul className="menu menu-horizontal w-full flex justify-between">
              <NavLinks />
            </ul>
          </div>

          {/* THEME SETUP */}
          <label className="swap swap-rotate md:order-3">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon */}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* moon icon */}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>

          {/*------------- MENU HAMBURGUER JUST FOR SM--------- */}
          <div className="drawer drawer-end lg:hidden">
            <input
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle"
              checked={isChecked}
              onChange={handleChange}
            />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="btn btn-primary drawer-button"
              >
                {isChecked ? (
                  <IoClose className="h-6 w-6" />
                ) : (
                  <FaBarsStaggered className="h-6 w-6" />
                )}
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
          {/*------------- END MENU HAMBURGUER JUST FOR SM--------- */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
