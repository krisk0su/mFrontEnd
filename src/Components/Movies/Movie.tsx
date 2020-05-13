import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { IMovie } from "../Interfaces/IMovie";

interface Props {
  Movie: IMovie;
}
export const Movie: React.FC<Props> = ({ Movie }) => {
  return (
    <Card href={`/moviebyid/${Movie._id}`}>
      <Image src={Movie.poster} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{Movie.title}</Card.Description>
      </Card.Content>
    </Card>
  );
};
