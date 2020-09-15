import React from "react";
import "./serie.scss";

export const Serie = (props: any) => {
  const {
    imageUrl,
    episodeNumber,
    duration,
    releaseDate,
    episodeTitle,
  } = props;

  return (
    <div className="test">
      <div className="serie">
        <div className="episode-number">{episodeNumber || "1"}</div>
        <i className="fas fa-play"></i>
        <img src={imageUrl} alt="" />
        <div className="serie-description-wrapper">
          <div className="serie-description">
            <div className="serie-date">{releaseDate || "11 Aug 20"}</div>
            <div className="serie-duration">{duration || "30"}</div>
          </div>
          <div className="serie-title">
            {episodeTitle || "Episode title here"}
          </div>
        </div>
      </div>
    </div>
  );
};
