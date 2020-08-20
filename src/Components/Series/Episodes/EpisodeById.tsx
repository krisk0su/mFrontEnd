import React, { useContext, useState, useEffect } from "react";
import { SeriesStore, seriesContext } from "../../../Store/SeriesStore";

export const EpisodeById = (props: any) => {
  const { id } = props.match.params;

  const [episode, setEpisode] = useState<any>();
  const seriesStore: SeriesStore = useContext(seriesContext);

  const init = async () => {
    const res = await seriesStore.getEpisodeById(id);
    setEpisode(res);
  };

  useEffect(() => {
    init();
  }, []);
  console.log("episode", episode);
  return <div>episode by id</div>;
};
