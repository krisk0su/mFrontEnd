import React from "react";
import "./label-input.scss";

export const LabelInput = (props: any) => {
  const { htmlFor, type, name, text } = props;
  return (
    <label htmlFor={htmlFor} className="ms-label">
      {text}
      <input type={type} name={name} className="ms-input" />
    </label>
  );
};
