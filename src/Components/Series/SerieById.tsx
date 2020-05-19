import React, { Fragment, useState, useEffect } from "react";
import { Embed, Image, Grid, Header } from "semantic-ui-react";
import { ISerie } from "../Interfaces/ISerie";

import axios from "axios";

export const SerieByid = (props: any) => {
  const [serie, setSerie] = useState<ISerie>();
  const { id } = props.match.params;
  const fetchData = async () => {
    const movieRes = await axios(`http://localhost:3000/series/${id}`);

    setSerie(movieRes.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      </Grid>
    </Fragment>
  );
};
