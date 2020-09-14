import React from "react";
import { MovieDetailsInformation } from "./movie-details-information/movie-details-information";
import { MovieDetailsEpisodes } from "./movie-details-episodes/movie-details-episodes";
import { MovieDetailsHeader } from "./movie-details-header/movie-details-header";
import "./movie-details.scss";

export const MovieDetails = (props: any) => {
  const { imageUrl, description, title, age, seasons, genre } = props;
  return (
    <div className="movie-details-wrapper">
      <MovieDetailsHeader imageUrl="https://www.wallpaperflare.com/static/56/397/283/breaking-bad-tv-breaking-bad-wallpaper.jpg" />
      <MovieDetailsInformation
        title={title}
        genres={genre}
        seasons={seasons}
        age={age}
        description={description}
      />
      <MovieDetailsEpisodes />
    </div>
  );
};
