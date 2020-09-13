import React from "react";
import "./slick-arrow.scss";

export const SlickNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`slick-arrow ${className}`}
      style={{ ...style, dusplay: "block" }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};
