import React, { useState, Fragment } from "react";
import { Button, Checkbox, Form, Image, TextArea } from "semantic-ui-react";
const axios = require("axios");

//4c0585a3 key
//http://img.omdbapi.com/?apikey=[4c0585a3]&
export const Create = () => {
  const [name, setName] = useState();
  const [year, setYear] = useState();
  //movie
  const [title, setTitle] = useState();
  const [movieYear, setMovieYear] = useState();
  const [actors, setActors] = useState();
  const [plot, setPlot] = useState();
  const [poster, setPoster] = useState();
  const [rating, setRating] = useState();
  const [genre, setGenre] = useState();

  const apiCall = async () => {
    let link = "http://www.omdbapi.com/?apikey=4c0585a3";
    if (name) link += `&t=${name}`;
    if (year) link += `&y=${year}`;
    link += "&plot=full";
    const res = await axios.get(link);
    console.log("res", res);
    return res.data;
  };
  const handleName = (
    e: any,
    { name, value }: { name: string; value: any }
  ) => {
    setName(value);
  };
  const handleYear = (
    e: any,
    { name, value }: { name: string; value: any }
  ) => {
    setYear(value);
  };
  //MOVIE
  const handleMovie = (
    e: any,
    { name, value }: { name: string; value: any }
  ) => {
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "year":
        setMovieYear(value);
        break;
      case "plot":
        setPlot(value);
        break;
      case "genre":
        setGenre(value);
        break;
      case "actors":
        setActors(value);
        break;
      default:
        break;
    }
  };
  // const handleMovieYear = (e, { name, value }) => {
  //   set(value);
  // };
  //http://www.omdbapi.com/?t=thor&y=2013&plot=full
  const onGetDetails = async () => {
    const res = await apiCall();
    setTitle(res.Title);
    setMovieYear(res.Year);
    setActors(res.Actors);
    setPlot(res.Plot);
    setPoster(res.Poster);
    setRating(res.imdbRating);
    setGenre(res.Genre);
  };
  const onSubmit = async () => {
    const res = await axios.post("http://localhost:5000/movies/create", {
      title,
      plot,
      year: movieYear,
      genre,
      actors,
      poster,
    });
  };
  return (
    <div>
      <Form onSubmit={onGetDetails}>
        <Form.Group>
          <Form.Input
            width="6"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleName as any}
            label="Movie Name"
          />
          <Form.Input
            width="6"
            placeholder="Name"
            name="year"
            value={year}
            onChange={handleYear as any}
            label="Movie Year"
          />
        </Form.Group>
        <Form.Button content="Get Movie Details" />
      </Form>
      <Fragment>
        {(title || movieYear) && (
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Input
                width="6"
                name="title"
                value={title}
                onChange={handleMovie as any}
                placeholder="Movie Name"
                label="Movie Name"
              />
              <Form.Input
                width="6"
                name="year"
                value={movieYear}
                onChange={handleMovie as any}
                placeholder="Movie Year"
                label="Movie Year"
              />
            </Form.Group>

            <Form.Input
              control={TextArea}
              placeholder="Plot"
              name="plot"
              value={plot}
              onChange={handleMovie as any}
              label="Movie Plot"
            />
            <Form.Group>
              <Form.Input
                control={TextArea}
                width="8"
                name="genre"
                value={genre}
                onChange={handleMovie as any}
                placeholder="Genre"
                label="Movie Genre"
              />
              <Form.Input
                control={TextArea}
                width="8"
                name="actors"
                value={actors}
                onChange={handleMovie as any}
                placeholder="Actors"
                label="Movie Actors"
              />
            </Form.Group>

            <Form.Button content="Post Movie" />
          </Form>
        )}
        <Image src={poster} wrapped ui={true} />
      </Fragment>
    </div>
  );
};
