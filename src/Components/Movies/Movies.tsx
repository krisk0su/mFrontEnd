import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import { Card, Icon, Image, Dropdown, Segment, Button } from "semantic-ui-react";
import { IMovie } from "../Interfaces/IMovie";
import { IGenre } from "../Interfaces/IGenre";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [genre, setGenre] = useState();
  const fetchData = async () => {
    const moviesRes = await axios("http://localhost:3000/movies/all", {
      params: {
        genre
      }
    });
    const genresRes = await axios("http://localhost:3000/genres");

    const genres = genresRes.data.map((genre: IGenre) => ({
      key: genre._id,
      value: genre._id,
      text: genre.name
    }))
    setGenreOptions(genres);
    setMovies(moviesRes.data);
  };
  const onGenreSelect = (e: any, value: any) => {
    setGenre(value.value);
  }
  const movieByGenre = async () => {
    if (genre) {
      const res = await axios.post("http://localhost:3000/movies/all", {
        params: {
          genre
        }
      });
      console.log("res", res)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const displayMovies = () => {
    return (
      <div>
        <Segment>
          <Dropdown
            placeholder='Select Genre'
            search
            selection
            options={genreOptions}
            onChange={onGenreSelect}
          />
          <Button primary onClick={movieByGenre}>Search by genre</Button>
        </Segment>
        <Segment>
          <Card.Group itemsPerRow={8} >
            {movies.map((mov: IMovie) => (
              <Movie Movie={mov} />
            ))}
          </Card.Group>
        </Segment>
      </div>

    );
  };
  return <Fragment>{movies && displayMovies()}</Fragment>;
};
