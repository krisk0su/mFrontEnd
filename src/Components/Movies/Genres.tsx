import React, { useEffect, useState } from "react";
import axios from "axios";
import { IGenre } from "../Interfaces/IGenre";
import { Dropdown, Button, Segment } from "semantic-ui-react";

export const Genres = (props: any) => {
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
    props.setGenre(value.value);
    props.setType("genre");
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
