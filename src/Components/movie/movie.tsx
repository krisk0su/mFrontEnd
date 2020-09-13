import React from "react";
import "./movie.scss";

export const Movie = (props: any) => {
  const { imageUrl, title, age, seasons } = props;
  const onMovieClick = (e: any) => {
    console.log("e => ", title);
  };
  return (
    <div className="movie" onClick={onMovieClick}>
      <img src={`${imageUrl}`} alt="" />
      <h2>{title || "Some title"}</h2>
      <div className="age-hover-info">{age}</div>
      <div className="seasons-hover-info">{seasons} Seasons</div>
      {/* <button className="play-btn">
        <i className="fas fa-play"></i>PLAY NOW
      </button> */}
    </div>
  );
};
