import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import { Card, Icon, Image } from "semantic-ui-react";
import { IMovie } from "../Interfaces/IMovie";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const moviesRes = await axios("http://localhost:3000/movies/all");
    setMovies(moviesRes.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const displayMovies = () => {
    return (
      <Card.Group itemsPerRow={8}>
        {movies.map((mov: IMovie) => (
          <Movie Movie={mov} />
        ))}
      </Card.Group>
    );
  };
  return <Fragment>{movies && displayMovies()}</Fragment>;
};
