// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // const [active, isActive] = useState("");
  return (
    <nav>
      {/* <ul>
        <li>
          <Link
            to={"/"}
            onClick={() => isActive("home")}
            className={active == "home" && "active"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            onClick={() => isActive("about")}
            className={active == "about" && "active"}
          >
            About
          </Link>
        </li>
      </ul> */}
      <ul>
        <li>
          <NavLink to={"/"} className={({ isActive }) => isActive && "active"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => isActive && "active"}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/about/focalx"}
            className={({ isActive }) => isActive && "active"}
          >
            focalx
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about/academy"}
            className={({ isActive }) => isActive && "active"}
          >
            XAcademy
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/service/frontEnd/10"}
            className={({ isActive }) => isActive && "active"}
          >
            frontEnd
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
