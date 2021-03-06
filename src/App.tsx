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
import { MainPage } from "./Components/main-page/main-page";
import { Register } from "./Components/auth/register/register";
import { Footer } from "./Components/footer/footer";
import { AllMovies } from "./Components/all-movies/all-movies";
import { MovieDetails } from "./Components/movie/movie-details/movie-details";
import { Login } from "./Components/auth/login/login";
import "./assets/main.scss";
import "./App.css";
import { AccountSettings } from "./Components/auth/account-settings/account-settings";

export const App = (props: any) => {
  return (
    <div className="site-wrapper">
      <Router>
        <Navigation />
        <Switch>
          <div className="main">
            <Route path="/" exact render={() => <MainPage />}></Route>
            <Route path="/m" exact render={() => <Index />}></Route>
            <Route path="/movies/details/" component={MovieDetails}></Route>
            <Route path="/all-movies" exact component={AllMovies}></Route>
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
            <Route path="/register-k" exact component={Register}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route
              path="account-settings"
              exact
              component={AccountSettings}
            ></Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
