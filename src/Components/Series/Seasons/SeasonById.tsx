import React, { useContext, Fragment, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { Segment, Card } from "semantic-ui-react";
import { SeriesStore, seriesContext } from "../../../Store/SeriesStore";
import { CreateEpisode } from "../Episodes/CreateEpisode";
import { Episode } from "../Episodes/Episode";

export const SeasonById = observer((props: any) => {
  const { id } = props.match.params;
  const [season, setSeason] = useState<any>();
  const seriesStore: SeriesStore = useContext(seriesContext);

  const init = async () => {
    const res = await seriesStore.getSeasonByid(id);
    setSeason(res);
  };

  useEffect(() => {
    init();
  }, []);

  const displayEpisodes = () => {
    return season?.episodes?.map((episode: any) => {
      return <Episode episode={episode} />;
    });
  };

  return (
    <div>
      <CreateEpisode seasonId={id} />
      <Segment>
        <Card.Group itemsPerRow={3}>{displayEpisodes()}</Card.Group>
      </Segment>
    </div>
  );
});
