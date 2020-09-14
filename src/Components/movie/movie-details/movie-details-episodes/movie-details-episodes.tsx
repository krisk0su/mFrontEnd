import React from "react";
import { Series } from "./series/series";
import "./movie-details-episodes.scss";

export const MovieDetailsEpisodes = () => {
  return (
    <div className="movie-details-episodes-wrapper">
      <div className="movie-details-episodes-buttons">
        <div className="movie-details-active-button">EPISODES</div>
        <div>MORE LIKE THIS</div>
        <div>UPCOMING MOVIES</div>
      </div>
      <Series />
    </div>
  );
};
