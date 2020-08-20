import React from "react";
import { Card, Image } from "semantic-ui-react";

export const Episode = (props: any) => {
  const { episode } = props;
  return (
    <Card href={`/episodeById/${episode._id}`}>
      <Image
        src="https://m.media-amazon.com/images/M/MV5BNjIzZjljZmQtOGNiYi00YmY2LWE1MGYtN2VlMmEyZDBlMzRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        label={episode.name}
      />
      <Card.Content>
        <Card.Description>{episode.name || "no title"}</Card.Description>
      </Card.Content>
    </Card>
  );
};
