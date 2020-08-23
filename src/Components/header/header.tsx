import React from "react";
import "./header.scss";
import { SearchSection } from "../search-section/search-section";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="description-wrapper">
          <div>
            <h1>All Your Streaming Services</h1>
            <h2>in One Place</h2>
            <p>
              Your Streaming Movies and TV Guide. Track, discover and find where
              to watch TV Shows and movies from Netflix, Amazon Prime, Hulu,
              Showtime and over 100 more servies.
            </p>
            <div>
              <button className="action-btn">HOW IT WORKS</button>
              <button className="action-btn">START A WATCH LIST</button>
            </div>
          </div>
        </div>
        <SearchSection />
      </div>
    </div>
  );
};
