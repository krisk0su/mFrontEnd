import React from "react";
import { Card, Image } from "semantic-ui-react";
import { ISerie } from "../Interfaces/ISerie";

interface Props {
  Serie: ISerie;
}
export const Serie: React.FC<Props> = ({ Serie }) => {
  return (
    <Card href={`/seriebyid/${Serie._id}`}>
      <Image src={Serie.poster} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{Serie.title}</Card.Description>
      </Card.Content>
    </Card>
  );
};
