import { createContext } from "react";
import { observable, action } from "mobx";
import { IMovie } from "../Components/Interfaces/IMovie";
import axios from "axios";

export interface MovieStore {
  searchType: string;
  searchPhrase: string;
  genre: string;
  currentPage: number;
  Movies: IMovie[];
  totalPages: number;

  updateCurrentPage(currentPage: number): any;
  getMovies(currentPage: number): any;
  initMovies(): any;
  getMoviesBySearch(currentPage: number): any;
  getMoviesByGenre(currentPage: number): any;
}
class Store implements MovieStore {
  @observable searchType: string = "normal";
  @observable searchPhrase: string;
  @observable currentPage = 1;
  @observable Movies: IMovie[] = [];
  @observable totalPages: number = 10;
  @observable genre: string;

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
    const res = await axios.post("http://localhost:3000/movies/all", {
      currentPage: 1,
    });

    this.totalPages = res.data.totalPages;
    this.Movies = res.data.movies;
  }
  @action async getMovies(currentPage: number) {
    const res = await axios.post("http://localhost:3000/movies/all", {
      currentPage,
    });

    this.totalPages = res.data.totalPages;
    this.Movies = res.data.movies;
  }

  @action async getMoviesBySearch(currentPage: number) {
    const res = await axios.post("http://localhost:3000/movies/search", {
      currentPage,
      searchPhrase: this.searchPhrase,
    });
    this.totalPages = res.data.totalPages;
    this.Movies = res.data.movies;
  }
  @action async getMoviesByGenre(currentPage: number) {
    const res = await axios.post("http://localhost:3000/movies/genre", {
      currentPage,
      genre: this.genre,
    });
    this.totalPages = res.data.totalPages;
    this.Movies = res.data.movies;
  }
}

export const moviesContext = createContext(new Store());
