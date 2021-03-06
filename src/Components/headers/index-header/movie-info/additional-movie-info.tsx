import React from "react";
import "./additional-movie-info.scss";

export const AdditionalMovieInfo = (props: any) => {
  const { title, age, seasons, description } = props;
  return (
    <div className="movie-info-wrapper">
      <div className="movie-info">
        <div>
          <h1>{title}</h1>
          <div className="age-seasons">
            <div className="age">{age}</div>
            <div className="seasons">{seasons} Seasons</div>
          </div>
          <p>{description}</p>
          <div className="buttons">
            <button className="play-btn">
              <i className="fas fa-play"></i>PLAY NOW
            </button>
            <button className="play-btn right">More details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MovieInfoShort = (props: any) => {
  const { title, age, seasons } = props;

  return (
    <div className="movie-info-wrapper">
      <div className="movie-info info-short">
        <div>
          <h1>{title}</h1>
          <div className="age-seasons">
            <div className="age">{age}+</div>
            <div className="seasons">{seasons} Seasons</div>
          </div>
        </div>
      </div>
    </div>
  );
};
