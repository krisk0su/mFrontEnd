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
      <div>
        <li>
          <NavLink to="/all-series" activeClassName="active-link">
            TV SHOWS
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-movies" activeClassName="active-link">
            MOVIES
          </NavLink>
        </li>
      </div>
      {/* <li className="search-bar">
        <i className="fas fa-search"></i>
      </li> */}
      <div>
        <li className="auth-item left-item">
          <NavLink to="/login">LOG IN</NavLink>
        </li>
        <li className="auth-item">
          <NavLink to="/register">REGISTER</NavLink>
        </li>
      </div>
    </ul>
  );
};
