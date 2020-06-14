import React, { useContext, Fragment } from "react";
import { observer } from "mobx-react";
import { Grid } from "semantic-ui-react";
import { SeriesStore, seriesContext } from "../../Store/SeriesStore";
import { Season } from "./Season";
import { ISerie } from "../Interfaces/ISerie";

export const Seasons = observer((props: any) => {
  const seriesStore: SeriesStore = useContext(seriesContext);
  const serie: ISerie = seriesStore.selectedSerie;

  const displaySeasons = () => {
    return serie?.seasons?.map((season: any) => {
      return <Season season={season} />;
    });
  };

  return (
    <Fragment>
      <Grid celled>
        <Grid.Row>{displaySeasons()}</Grid.Row>
      </Grid>
    </Fragment>
  );
});
