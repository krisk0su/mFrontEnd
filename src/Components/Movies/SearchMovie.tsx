import React, { useState, useContext } from "react";
import { Form, Input, Button, Segment } from "semantic-ui-react";
import { MovieStore, moviesContext } from "../../Store/Store";

export const SearchMovie = (props: any) => {
  const store: MovieStore = useContext(moviesContext);
  const [val, setVal] = useState();

  const onChange = (e: any, { value }: { value: any }) => {
    setVal(value);
  };
  const onSubmit = () => {
    store.searchType = "search";
    store.searchPhrase = val;
    store.getMoviesBySearch(1);
  };
  return (
    <Segment>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="Search movie"
            placeholder="Search movie"
            onChange={onChange as any}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
          />
        </Form.Group>
      </Form>
    </Segment>
  );
};
