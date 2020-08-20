import React, { useContext, Fragment } from "react";
import { observer } from "mobx-react";
import { Image, Card } from "semantic-ui-react";
import { SeriesStore, seriesContext } from "../../Store/SeriesStore";

export const Season = observer((props: any) => {
  const season = props.season;

  return (
    <Card href={`/seasonById/${season._id}`}>
      <Image
        src="https://m.media-amazon.com/images/M/MV5BNjIzZjljZmQtOGNiYi00YmY2LWE1MGYtN2VlMmEyZDBlMzRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        label={season.name}
      />
      <Card.Content>
        <Card.Description>{season?.title || "no title"}</Card.Description>
      </Card.Content>
    </Card>
  );
});
