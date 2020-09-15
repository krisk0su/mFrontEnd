import React from "react";
import { LabelInput } from "../../shared/label-input/label-input";
import { Link } from "react-router-dom";
import "./register.scss";

export const Register = () => {
  return (
    <div className="register-wrapper">
      <form method="POST">
        <h1>REGISTER</h1>
        <div className="input-row">
          <LabelInput
            htmlFor="first-name"
            type="text"
            name="first-name"
            text="First name"
          />
          <LabelInput
            htmlFor="last-name"
            type="text"
            name="last-name"
            text="Last name"
          />
        </div>
        <LabelInput htmlFor="email" type="email" name="email" text="Email" />
        <LabelInput
          htmlFor="username"
          type="text"
          name="username"
          text="Username"
        />
        <LabelInput
          htmlFor="password"
          type="password"
          name="password"
          text="Password"
        />
        <label htmlFor="remember">
          <input type="checkbox" name="remember" />
          Remmember me
        </label>
        <div className="register-helpers">
          <Link to="/">Already have an account?</Link>
          {/* <Link to="/">Sign up</Link> */}
        </div>
        <button type="submit" className="ms-submit-btn">
          REGISTER
        </button>
      </form>
    </div>
  );
};
