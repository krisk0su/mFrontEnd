import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <ul className="information-links">
        <li>
          <NavLink to="">About us</NavLink>
        </li>
        <li>
          <NavLink to="">Movies</NavLink>
        </li>
        <li>
          <NavLink to="">TV Shows</NavLink>
        </li>
      </ul>
      <ul className="information-links">
        <NavLink to="">Privacy Policy</NavLink>
        <NavLink to="">Terms {"&"} Conditions</NavLink>
        <NavLink to="">FAQ</NavLink>
      </ul>
      <ul className="information-links-social">
        <li>
          <i className="fab fa-facebook-f"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fas fa-paper-plane"></i>
        </li>
      </ul>
    </div>
  );
};
