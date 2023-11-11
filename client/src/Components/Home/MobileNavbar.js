import React from "react";
import "./MobileNavbar.css";
import ShortDate from "./ShortDate";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="lg:hidden">
      <nav className="mobile-nav ">
        <input id="nav-toggle" type="checkbox" />
        <ShortDate />
        <div className="logo">
          <h2>TAPCLONE</h2>
        </div>

        <ul class="mobnav-links ">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              ABOUT
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              SERVICES
            </NavLink>{" "}
          </li>
          {/* <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              PROJECTS
            </NavLink>{" "}
          </li> */}
          {/* <li>
            <NavLink
              to="/team"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              TEAM
            </NavLink>{" "}
          </li> */}
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>

        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </div>
  );
};

export default MobileNavbar;
