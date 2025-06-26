import React from "react";
import { links } from "../utils";
import { NavLink } from "react-router";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink className="capitalize" to={link.url}>
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
