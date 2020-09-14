import React from "react";
import "./movie-details-header.scss";

export const MovieDetailsHeader = (props: any) => {
  const { imageUrl } = props;
  return (
    <div className="movie-details-header">
      <img src={imageUrl} alt="" />
      <div className="movie-details-header">
        <div className="start-watching">
          <i className="fas fa-play-circle"></i>
          <div>Watch latest episode</div>
        </div>
        <div className="movie-interact">
          <i className="fas fa-share-alt"></i>
          <i className="fas fa-plus"></i>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    </div>
  );
};
