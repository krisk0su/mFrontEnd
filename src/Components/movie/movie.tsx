import React from "react";
import "./movie.scss";
import { useHistory } from "react-router-dom";

export const Movie = (props: any) => {
  const { imageUrl, title, age, seasons } = props;
  const history = useHistory();
  const onMovieClick = (e: any) => {
    const path = `/movies/details/${title}`;
    history.push(path);
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
