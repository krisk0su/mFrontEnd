import React from "react";
import "./movie.scss";

export const Movie = (props: any) => {
  const { imageUrl, title, description, seasonsCount } = props;
  return (
    <div className="movie">
      <img
        src="../../static/imgs/breaking-bad"
        width="100px"
        height="900px"
        alt=""
      />
      <img
        src="../../static/imgs/breaking-bad"
        width="100px"
        height="900px"
        alt=""
        className="absolute-image"
      />
    </div>
  );
};
