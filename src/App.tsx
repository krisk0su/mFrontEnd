import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Index } from "./Components/Index";
import { Movies } from "./Components/Movies/Movies";
import { CreateMovie } from "./Components/Movies/Create";
import { MovieById } from "./Components/Movies/MovieById";
import { CreateSerie } from "./Components/Series/Create";
import { SerieByid } from "./Components/Series/SerieById";
import { Series } from "./Components/Series/Series";
import { SeasonById } from "./Components/Series/Seasons/SeasonById";
import { inject, observer } from "mobx-react";

import "./App.css";
import { EpisodeById } from "./Components/Series/Episodes/EpisodeById";

export const App = (props: any) => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Index}></Route>
            <Route path="/movies" exact component={Movies}></Route>
            <Route path="/movies/create" exact component={CreateMovie}></Route>
            <Route path="/moviebyid/:id" exact component={MovieById}></Route>
            <Route path="/series" exact component={Series}></Route>
            <Route path="/series/create" exact component={CreateSerie}></Route>
            <Route path="/seriebyid/:id" exact component={SerieByid}></Route>
            <Route path="/seasonById/:id" exact component={SeasonById}></Route>
            <Route
              path="/episodeById/:id"
              exact
              component={EpisodeById}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
