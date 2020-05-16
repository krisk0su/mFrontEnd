import React, { Fragment, useState } from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Segment,
} from "semantic-ui-react";

export const SearchMovie = (props: any) => {
  const [val, setVal] = useState();
  const onChange = (e: any, { value }: { value: any }) => {
    setVal(value);
  };
  const onSubmit = () => {
    props.setSearch(val);
    props.setType("search");
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
