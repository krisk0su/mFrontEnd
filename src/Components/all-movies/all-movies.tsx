import React from "react";
import { MoviesSeriesHeader } from "../headers/movies-series-header/movies-series-header";
import { MovieRow } from "../movie-row/movie-row";
import "./all-movies.scss";

export const AllMovies = () => {
  return (
    <div className="all-movies-wrapper">
      <MoviesSeriesHeader />
      <div className="main">
        <MovieRow title="CURRENTLY TRENDING" />
        <MovieRow title="RECENT RELEASES" />
        <MovieRow title="DOCUMENTARIES" />
        <MovieRow title="COMEDIES" />
      </div>
    </div>
  );
};
