import { createContext } from "react";
import { observable, action } from "mobx";
import axios from "axios";
import { ISerie } from "../Components/Interfaces/ISerie";
import { ISerieRequest } from "../Components/Request/ISerieRequest";

export class SeriesStore {
  @observable selectedSerie: ISerie;

  @action async getSerie(id: string) {
    const res = await axios.get(`http://localhost:5000/series/${id}`);
    this.selectedSerie = res.data;
  }
  @action async postSerie(serie: ISerieRequest) {
    const res = await axios.post("http://localhost:5000/series/create", serie);
    const { _id } = res.data as ISerie;
    await this.getSerie(_id);
    return this.selectedSerie._id;
  }
}

export const seriesContext = createContext(new SeriesStore());
