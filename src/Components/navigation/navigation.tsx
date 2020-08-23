import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <NavLink to="/" activeClassName="active-link">
          MOVIE SURF
        </NavLink>
      </li>
      <li className="search-bar">
        <i className="fas fa-search"></i>
      </li>
      <li>
        <NavLink to="/series" activeClassName="active-link">
          TV SHOWS
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" activeClassName="active-link">
          MOVIES
        </NavLink>
      </li>

      <li className="auth-item left-item">LOG IN</li>
      <li className="auth-item">REGISTER</li>
    </ul>
  );
};
