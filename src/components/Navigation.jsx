import React from "react";
import { NavLink } from "react-router-dom";
import Links from "./Links";
import "./Navigation.css";

function Navigation() {
  return (
    <aside>
      <div className="quotation-marks">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="180"
          viewBox="0 0 28 28"
          stroke="rgb(215, 42, 47)"
          fill="rgb(215, 42, 47)"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(data) => (data.isActive ? "active" : "")}
              exact
              to="/"
              activeClassName="link-active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(data) => (data.isActive ? "active" : "")}
              exact
              to="/skills"
              activeClassName="link-active"
            >
              Credentials
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(data) => (data.isActive ? "active" : "")}
               exact
              to="/portofolio"
              activeClassName="link-active"
            >
              Authors
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="link-active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <Links /> */}
    </aside>
  );
}

export default Navigation;
