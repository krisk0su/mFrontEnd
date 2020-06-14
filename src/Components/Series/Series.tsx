import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { SeriesStore, seriesContext } from "../../Store/SeriesStore";
import { Segment, Card } from "semantic-ui-react";
import { ISerie } from "../Interfaces/ISerie";
import { Serie } from "./Serie";

export const Series = observer((props: any) => {
  const store: SeriesStore = useContext(seriesContext);
  const initSeries = async () => {
    //initilizing the movies for first time
    await store.initSeries();
  };
  useEffect(() => {
    initSeries();
  }, []);
  return (
    <Segment>
      <Card.Group itemsPerRow={5}>
        {store.Series.map((mov: ISerie) => (
          <Serie key={mov._id} Serie={mov} />
        ))}
      </Card.Group>
    </Segment>
  );
});
