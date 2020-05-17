import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IGenre } from "../Interfaces/IGenre";
import { Dropdown, Segment } from "semantic-ui-react";
import { MovieStore, moviesContext } from "../../Store/Store";

export const Genres = (props: any) => {
  const store: MovieStore = useContext(moviesContext);
  const [genreOptions, setGenreOptions] = useState([]);
  const fetchGenres = async () => {
    const genresRes = await axios("http://localhost:3000/genres");
    const genres = genresRes.data.map((genre: IGenre) => ({
      key: genre._id,
      value: genre._id,
      text: genre.name,
    }));
    setGenreOptions(genres);
  };
  useEffect(() => {
    fetchGenres();
  }, []);
  const onGenreSelect = (e: any, value: any) => {
    store.searchType = "genre";
    store.genre = value.value;
    store.searchPhrase = "";
    store.getMoviesByGenre(1);
  };

  return (
    <Segment>
      <Dropdown
        placeholder="Select Genre"
        search
        selection
        options={genreOptions}
        onChange={onGenreSelect}
      />
    </Segment>
  );
};
