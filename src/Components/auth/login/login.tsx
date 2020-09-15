import React from "react";
import { Link } from "react-router-dom";
import { LabelInput } from "../../shared/label-input/label-input";
import "./login.scss";

export const Login = () => {
  return (
    <div className="login-wrapper">
      <form method="GET">
        <h1>LOGIN</h1>
        <LabelInput htmlFor="email" type="email" name="email" text="Email" />
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
        <div className="login-helpers">
          <Link to="/">Forgot your password</Link>
          <Link to="/">Sign up</Link>
        </div>
        <button type="submit" className="ms-submit-btn">LOGIN</button>
      </form>
    </div>
  );
};
