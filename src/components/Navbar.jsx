import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="brand">V RESIDENCY</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>

        <li>
          <NavLink to="/menu">MENU / ROOMS</NavLink>
        </li>

        <li>
          <NavLink to="/location">LOCATION</NavLink>
        </li>

        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>

        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>

      <NavLink to="/contact/booking" className="btn1">
        BOOK NOW
      </NavLink>
    </nav>
  );
}

export default Navbar;