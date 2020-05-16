import React, { useState, useEffect, Fragment, useContext } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import { Genres } from "./Genres";
import { SearchMovie } from "./SearchMovie";
import { MPagination } from "./MPagination";
import { MovieStore, moviesContext } from "../../Store/Store";
import { Card, Segment } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import { IMovie } from "../Interfaces/IMovie";

export const Movies = observer((props: any) => {
  const store: MovieStore = useContext(moviesContext);
  const initMovies = async () => {
    //initilizing the movies for first time
    await store.initMovies();
  };
  useEffect(() => {
    initMovies();
  }, []);

  return (
    <div>
      <SearchMovie />
      <Genres />
      <Segment>
        <Card.Group itemsPerRow={5}>
          {store.Movies.map((mov: IMovie) => (
            <Movie key={mov._id} Movie={mov} />
          ))}
        </Card.Group>
      </Segment>
      <MPagination />
    </div>
  );
});
