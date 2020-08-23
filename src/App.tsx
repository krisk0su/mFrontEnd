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
import { EpisodeById } from "./Components/Series/Episodes/EpisodeById";
import { Navigation } from "./Components/navigation/navigation";
import { Header } from "./Components/header/header";
import { MainPage } from "./Components/main-page/main-page";
import "./assets/main.scss";
import "./App.css";

export const App = (props: any) => {
  return (
    <div className="site-wrapper">
      <Router>
        <Navigation />
        <Header />
        <div style={{height: '63vh'}}></div>
        <MainPage />
        <Switch>
          <Route path="/" exact render={() => <Index />}></Route>
          <Route path="/movies" exact component={Movies}></Route>
          <Route path="/movies/create" exact component={CreateMovie}></Route>
          <Route path="/moviebyid/:id" exact component={MovieById}></Route>
          <Route path="/series" exact component={Series}></Route>
          <Route path="/series/create" exact component={CreateSerie}></Route>
          <Route path="/seriebyid/:id" exact component={SerieByid}></Route>
          <Route path="/seasonById/:id" exact component={SeasonById}></Route>
          <Route path="/episodeById/:id" exact component={EpisodeById}></Route>
        </Switch>
      </Router>
    </div>
  );
};
