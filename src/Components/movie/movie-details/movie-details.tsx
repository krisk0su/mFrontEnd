import React from "react";
import "./movie-details.scss";

export const MovieDetails = (props: any) => {
  const { imageUrl, description, title, age, seasons, genre } = props;
  console.log(" image url => ", imageUrl);
  return (
    <div className="movie-details-wrapper">
      <img
        src="https://www.wallpaperflare.com/static/56/397/283/breaking-bad-tv-breaking-bad-wallpaper.jpg"
        alt=""
      />
      <div className="movie-details-header">
        <div className="movie-details-header-information">
          <div className="start-watching">
            <i className="fas fa-play"></i>
            <span>Watch latest episode</span>
          </div>
          <div className="movie-interact">
            <i className="fas fa-share-alt"></i>
            <i className="fas fa-plus"></i>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
