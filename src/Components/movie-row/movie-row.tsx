import React from "react";
import { Movie } from "../movie/movie";
import "./movie-row.scss";

export const MovieRow = (props: any) => {
  const { movies, title, cls } = props;
  return (
    <div className={`movie-row ${cls}`}>
      <div className="title">
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>
      <div className="movies">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
};