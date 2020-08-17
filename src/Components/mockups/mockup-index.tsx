import React from "react";
import "./mockup.css";

export const MockupIndex = () => {
  return (
    <div className="site-wrapper">
      <div className="header">
        <ul className="navigation">
          <li>MOVIE SURF</li>
          <li className="search-bar">
            <i className="fas fa-search"></i>
          </li>
          <li>TV SHOWS</li>
          <li>MOVIES</li>
          <li className="auth-item left-item">LOG IN</li>
          <li className="auth-item">REGISTER</li>
        </ul>
        <div className="description-wrapper">
          <h1>All Your Streaming Services</h1>
          <h2>in One Place</h2>
          <p>
            Your Streaming Movies and TV Guide. Track, discover and find where
            to watch TV Shows and movies from Netflix, Amazon Prime, Hulu,
            Showtime and over 100 more servies.
          </p>
          <button className="action-btn">HOW IT WORKS</button>
          <button className="action-btn">START A WATCH LIST</button>
        </div>
      </div>
    </div>
  );
};
