import React, { useState, Fragment, useContext, useCallback } from "react";
import { Form, Image, TextArea, Dropdown } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { ISerie } from "../Interfaces/ISerie";
import { useHistory } from "react-router-dom";
import { ISerieRequest } from "../Request/ISerieRequest";
import { observer } from "mobx-react";
import { SeriesStore, seriesContext } from "../../Store/SeriesStore";
const axios = require("axios");

const friendOptions = [
  {
    key: "Serie",
    text: "Serie",
    value: "Serie",
  },
  {
    key: "Anime",
    text: "Anime",
    value: "Anime",
  },
];
export const CreateSerie = observer(() => {
  const seriesStore: SeriesStore = useContext(seriesContext);
  const [name, setName] = useState();
  const [year, setYear] = useState();
  //serie
  const [title, setTitle] = useState();
  const [movieYear, setMovieYear] = useState<number>();
  const [actors, setActors] = useState();
  const [plot, setPlot] = useState();
  const [poster, setPoster] = useState();
  const [rating, setRating] = useState<number>();
  const [genre, setGenre] = useState();
  const [seasons, setSeasons] = useState<number>();
  const [type, setType] = useState();

  const history = useHistory();
  const apiCall = async () => {
    let link = "http://www.omdbapi.com/?apikey=4c0585a3";
    if (name) link += `&t=${name}`;
    if (year) link += `&y=${year}`;
    link += "&plot=full";
    const res = await axios.get(link);
    console.log("data", res.data);
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
      case "rating":
        setRating(value);
        break;
      case "seasons":
        setSeasons(value);
        break;
      default:
        break;
    }
  };
  const onChange = useCallback((e: any, res: any) => {
    setType(res.value);
  }, []);
  const onGetDetails = async () => {
    const res = await apiCall();

    const reg = new RegExp("^[0-9]+");
    const year = +res.Year.match(reg)[0];

    setTitle(res.Title);
    setMovieYear(year);
    setActors(res.Actors);
    setPlot(res.Plot);
    setPoster(res.Poster);
    setRating(+res.imdbRating);
    setGenre(res.Genre);
    setSeasons(+res.totalSeasons);
  };
  const onSubmit = async () => {
    const serie: ISerieRequest = {
      title,
      plot,
      year: movieYear,
      genre,
      actors,
      rating,
      seasons,
      poster,
      type,
    };
    const id = await seriesStore.postSerie(serie);

    history.push(`/series/${id}`);
  };
  return (
    <div>
      <h1>SERIES</h1>
      <Form onSubmit={onGetDetails}>
        <Form.Group>
          <Form.Input
            width="6"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleName as any}
            label="Serie Name"
          />
          <Form.Input
            width="6"
            placeholder="Name"
            name="year"
            value={year}
            onChange={handleYear as any}
            label="Serie Year"
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
                placeholder="Serie Name"
                label="Serie Name"
              />
              <Form.Input
                width="6"
                name="year"
                value={movieYear}
                onChange={handleMovie as any}
                placeholder="Serie Year"
                label="Serie Year"
              />
            </Form.Group>

            <Form.Input
              control={TextArea}
              placeholder="Plot"
              name="plot"
              value={plot}
              onChange={handleMovie as any}
              label="Serie Plot"
            />
            <Form.Group>
              <Form.Input
                control={TextArea}
                width="8"
                name="genre"
                value={genre}
                onChange={handleMovie as any}
                placeholder="Genre"
                label="Serie Genre"
              />
              <Form.Input
                control={TextArea}
                width="8"
                name="actors"
                value={actors}
                onChange={handleMovie as any}
                placeholder="Actors"
                label="Serie Actors"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                width="8"
                name="rating"
                value={rating}
                onChange={handleMovie as any}
                placeholder="Serie Rating"
                label="Serie Rating"
              />
              <Form.Input
                width="8"
                name="seasons"
                value={seasons}
                onChange={handleMovie as any}
                placeholder="Serie Seasons"
                label="Serie Seasons"
              />
            </Form.Group>
            <Dropdown
              placeholder="Select Type"
              fluid
              selection
              options={friendOptions}
              onChange={onChange}
            />
            <Form.Button content="Post Serie" />
          </Form>
        )}
        <Image src={poster} wrapped ui={true} />
      </Fragment>
    </div>
  );
});
