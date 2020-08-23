import React from "react";
import { Movie } from "../movie/movie";
import { MovieRow } from "../movie-row/movie-row";
import "./main-page.scss";

export const MainPage = () => {
  return (
    <div className="main">
      <MovieRow title="CURRENTLY TRENDING" cls="trending" />
      <MovieRow title="RECENT RELEASES" cls="recent" />
      <MovieRow title="DOCUMENTARIES" cls="documentaries" />
      <MovieRow title="COMEDIES" cls="comedies" />
    </div>
  );
};
