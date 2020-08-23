import React from "react";
import { Movie } from "../movie/movie";
import { MovieRow } from "../movie-row/movie-row"
import "./main-page.scss";

export const MainPage = () => {
  return (
    <div className="main">
      <MovieRow title="CURRENTLY TRENDING"/>
      <MovieRow title="RECENT RELEASES"/>
      <MovieRow title="DOCUMENTARIES"/>
      <MovieRow title="COMEDIES"/>
    </div>
  );
};
