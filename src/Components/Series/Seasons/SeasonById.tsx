import React, { useContext, Fragment, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { Embed, Image, Grid, Header, Button } from "semantic-ui-react";
import { SeriesStore, seriesContext } from "../../../Store/SeriesStore";
import { CreateEpisode } from "../Episodes/CreateEpisode";

export const SeasonById = observer((props: any) => {
  const { id } = props.match.params;
  const [season, setSeason] = useState();
  const seriesStore: SeriesStore = useContext(seriesContext);

  const init = async () => {
    const res = await seriesStore.getSeasonByid(id);
    setSeason(res);
  };

  useEffect(() => {
    init();
  }, []);

  console.log("season", season);
  return (
    <div>
      <CreateEpisode seasonId={id} />
      season by id
    </div>
  );
});
