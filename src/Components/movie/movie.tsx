import React from "react";
import "./movie.scss";

export const Movie = (props: any) => {
  const { imageUrl, title, description, seasonsCount } = props;
  return (
    <div className="movie">
      <img
        src={`${imageUrl}`}
        alt=""
      />
    </div>
  );
};
