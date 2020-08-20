import React, { useState, useContext } from "react";
import { observer } from "mobx-react";
import { Form } from "semantic-ui-react";
import { SeriesStore, seriesContext } from "../../../Store/SeriesStore";

export const CreateEpisode = (props: any) => {
  const [name, setName] = useState();
  const [link, setLink] = useState();
  const { seasonId } = props;
  const seriesStore: SeriesStore = useContext(seriesContext);

  const handleName = (
    e: any,
    { name, value }: { name: string; value: any }
  ) => {
    setName(value);
  };
  const handleLink = (
    e: any,
    { name, value }: { name: string; value: any }
  ) => {
    setLink(value);
  };

  const onSubmit = () => {
    const res = seriesStore.postEpisode({ name, link, seasonId });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Input
          width="6"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleName as any}
          label="Episode Name"
        />
        <Form.Input
          width="6"
          placeholder="Link"
          name="link"
          value={link}
          onChange={handleLink as any}
          label="Episode Link"
        />
      </Form.Group>
      <Form.Button content="Post episode" />
    </Form>
  );
};
