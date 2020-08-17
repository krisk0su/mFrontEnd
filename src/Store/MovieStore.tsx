import { createContext } from "react";
import { observable, action } from "mobx";
import { IMovie } from "../Components/Interfaces/IMovie";
import axios from "axios";

export class MovieStore {
  @observable searchType: string = "normal";
  @observable searchPhrase: string;
  @observable currentPage = 1;
  @observable Movies: IMovie[] = [];
  @observable totalPages: number = 10;
  @observable genre: string;
  @observable movie: IMovie;

  @action updateCurrentPage(currentPage: number) {
    this.currentPage = currentPage;
    switch (this.searchType) {
      case "normal":
        this.getMovies(currentPage);
        break;
      case "search":
        this.getMoviesBySearch(currentPage);
        break;
      case "genre":
        this.getMoviesByGenre(currentPage);
        break;
      default:
        this.Movies = [];
        break;
    }
  }
  //initilizing movies for first time by accessing /movies
  @action async initMovies() {
    const res = await axios.post("http://localhost:5000/movies/all", {
      currentPage: 1,
    });

    this.totalPages = res.data.totalPages;
    this.Movies = res.data.movies;
  }
  @action async getMovies(currentPage: number) {
    const res = await axios.post("http://localhost:5000/movies/all", {
      currentPage,
    });

    this.totalPages = res.data.totalPages;
    this.Movies = res.data.movies;
  }

  @action async getMoviesBySearch(currentPage: number) {
    const res = await axios.post("http://localhost:5000/movies/search", {
      currentPage,
      searchPhrase: this.searchPhrase,
    });
    this.totalPages = res.data.totalPages;
    this.Movies = res.data.movies;
  }
  @action async getMoviesByGenre(currentPage: number) {
    const res = await axios.post("http://localhost:5000/movies/genre", {
      currentPage,
      genre: this.genre,
    });
    this.totalPages = res.data.totalPages;
    this.Movies = res.data.movies;
  }
  @action async getMovieById(id: string) {
    const movie = await axios(`http://localhost:5000/movies/${id}`);
    this.movie = movie.data;
    return movie.data;
  }
}

export const moviesContext = createContext(new MovieStore());
