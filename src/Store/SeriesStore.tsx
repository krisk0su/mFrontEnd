import { createContext } from "react";
import { observable, action } from "mobx";
import { ISerie } from "../Components/Interfaces/ISerie";
import { ISerieRequest } from "../Components/Request/ISerieRequest";
import axios from "axios";

export class SeriesStore {
  @observable selectedSerie: ISerie;
  @observable Series: ISerie[] = [];
  @observable totalPages: number = 10;
  @observable serie: ISerie;

  //initilizing movies for first time by accessing /movies
  @action async initSeries() {
    const res = await axios.post(`http://localhost:5000/series/all`, {
      currentPage: 1,
    });

    this.Series = res.data.series;
    this.totalPages = res.data.totalPages;
  }
  @action async getSeries() {
    const res = await axios.get(`http://localhost:5000/series/all`);
  }
  @action async getSeasonByid(id: string) {
    const res = await axios.get(`http://localhost:5000/series/season/${id}`);
    return res.data;
  }
  @action async getSerie(id: string) {
    const serie = await axios.get(`http://localhost:5000/series/${id}`);
    this.selectedSerie = serie.data;
    console.log("serie", serie);
    return this.selectedSerie;
  }
  @action async postEpisode(episode: any) {
    const serie = await axios.post(
      `http://localhost:5000/series/episode`,
      episode
    );
    return true;
  }
  @action async postSerie(serie: ISerieRequest) {
    const res = await axios.post("http://localhost:5000/series/create", serie);
    const { _id } = res.data as ISerie;
    await this.getSerie(_id);
    return this.selectedSerie._id;
  }
}
export const seriesContext = createContext(new SeriesStore());
