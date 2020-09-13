import React from "react";
import "./movie.scss";

export const Movie = (props: any) => {
  const { imageUrl, title, description, seasonsCount } = props;
  return (
    <div className="movie">
      <img src={`${imageUrl}`} alt="" />
      <h2>{title || "Some title"}</h2>
      <p>
        {description ||
          "lorem ipsum is a sample text used for dummy texts around the world since 1650s"}
      </p>
    </div>
  );
};
