import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import { Genres } from "./Genres";
import { SearchMovie } from "./SearchMovie";
import {
  Card,
  Icon,
  Image,
  Dropdown,
  Segment,
  Button,
  Pagination,
} from "semantic-ui-react";
import { IMovie } from "../Interfaces/IMovie";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(100);
  const [genre, setGenre] = useState("none");
  const [search, setSearch] = useState("none");
  const [sType, setSType] = useState("normal");

  const fetchData = async (current: number = 1) => {
    const moviesRes = await axios.post("http://localhost:3000/movies/all", {
      current,
      genre,
      sType,
    });
    setMovies(moviesRes.data.movies);
    setTotalPages(moviesRes.data.totalPages);
  };

  useEffect(() => {
    fetchData();
  }, [sType, search, genre]);
  const onPageChange = (e: any, { activePage }: any) => {
    fetchData(activePage);
  };
  const displayMovies = () => {
    return (
      <div>
        <SearchMovie setSearch={setSearch} setType={setSType} />
        <Genres setGenre={setGenre} setType={setSType} />
        <Segment>
          <Card.Group itemsPerRow={5}>
            {movies.map((mov: IMovie) => (
              <Movie key={mov._id} Movie={mov} />
            ))}
          </Card.Group>
        </Segment>
        <Pagination
          defaultActivePage={1}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    );
  };
  return <Fragment>{movies && displayMovies()}</Fragment>;
};
