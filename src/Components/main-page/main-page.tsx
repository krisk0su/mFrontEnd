import React from "react";
import { IndexHeader } from "../headers/index-header/index-header"
import { MovieRow } from "../movie-row/movie-row";
import "./main-page.scss";

export const MainPage = () => {
  return (
    <div>
      <IndexHeader />
      <div className="main">
        <MovieRow title="CURRENTLY TRENDING" />
        <MovieRow title="RECENT RELEASES" />
        <MovieRow title="DOCUMENTARIES" />
        <MovieRow title="COMEDIES" />
      </div>
    </div>
  );
};
