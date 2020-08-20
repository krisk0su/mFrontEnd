import React, { useContext, Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import { Embed, Image, Grid, Header, Button } from "semantic-ui-react";
import { SeriesStore, seriesContext } from "../../Store/SeriesStore";

export const SeasonById = observer((props: any) => {
  const { id } = props.match.params;

  const seriesStore: SeriesStore = useContext(seriesContext);

  useEffect(() => {
    seriesStore.getSeasonByid(id);
  }, []);
  return <div>season by id</div>;
});
