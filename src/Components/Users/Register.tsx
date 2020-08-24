import React, { useCallback, useState } from "react";
import { Form, Button, FormProps } from "semantic-ui-react";

export const Register = (props: any) => {
  const [email, setEmail] = useState();
  const [password, setPassowrd] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const handleEmail = useCallback(
    (e, { name, value }) => {
      setEmail(value);
    },
    [email]
  );

  const handlePass = useCallback(
    (e, { value }) => {
      setPassowrd(value);
    },
    [password]
  );

  const handleConfirmPassword = useCallback(
    (e, { value }) => {
      setConfirmPass(value);
    },
    [confirmPass]
  );

  const onSubmit = useCallback(() => {
    console.log("email", email);
    console.log("password", password);
    console.log("confirmPass", confirmPass);
  }, [email, password, confirmPass]);
  return (
    <Form onSubmit={onSubmit}>
      <Form.Input
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleEmail}
        label="Email"
      ></Form.Input>
      <Form.Input
        placeholder="Password"
        name="password"
        value={password}
        onChange={handlePass}
        label="Password"
      ></Form.Input>

      <Form.Input
        placeholder="Confirm Password"
        name="confirmpass"
        value={confirmPass}
        onChange={handleConfirmPassword}
        label="Confirm Password"
      ></Form.Input>

      <Button type="submit">Submit</Button>
    </Form>
  );
};
