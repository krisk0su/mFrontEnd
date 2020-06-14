import React, { Fragment, useState, useEffect, useContext } from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import { observer } from "mobx-react";
import { SeriesStore, seriesContext } from "../../Store/SeriesStore";
import { Seasons } from "./Seasons";
import { ISerie } from "../Interfaces/ISerie";

export const SerieByid = observer((props: any) => {
  const [serie, setSerie] = useState<ISerie>();
  const { id } = props.match.params;
  const store: SeriesStore = useContext(seriesContext);
  const fetchData = async () => {
    const ser = await store.getSerie(id);
    setSerie(ser);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("serie", serie);
  return (
    <Fragment>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={serie && serie.poster} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as="h1">{serie && serie.title}</Header>
            <Header as="h4">{serie && serie.plot}</Header>
            <Header as="h5">{serie && serie.actors}</Header>
            <Header as="h5">{serie && serie.genre}</Header>
          </Grid.Column>
        </Grid.Row>
        <Seasons />
      </Grid>
    </Fragment>
  );
});
