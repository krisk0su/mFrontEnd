import React, { useContext, Fragment } from "react";
import { observer } from "mobx-react";
import { Embed, Image, Grid, Header } from "semantic-ui-react";
import { SeriesStore, seriesContext } from "../../Store/SeriesStore";

export const Season = observer((props: any) => {
  const season = props.season;
  console.log("season", season);
  return (
    <Grid.Column width={3}>
      <Image
        src="https://m.media-amazon.com/images/M/MV5BNjIzZjljZmQtOGNiYi00YmY2LWE1MGYtN2VlMmEyZDBlMzRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        label={season.name}
      />
    </Grid.Column>
  );
});
