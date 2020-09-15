import React from "react";
import "./movie-details-information.scss";

export const MovieDetailsInformation = (props: any) => {
  const { title, genres, age, seasons, year, desctiption } = props;
  return (
    <div className="movie-details-information">
      <h1>{title || "BREAKING BAD"}</h1>
      <div className="movie-details-info-wrapper">
        <ul>
          {genres ? (
            genres.map((g: any) => <li>{g}</li>)
          ) : (
            <>
              <li>Action</li>
              <li>Drama</li>
              <li>Something</li>
            </>
          )}
        </ul>
        <hr/>
        <div className="movie-details-flex">
          <div className="age-restriction">{age || "18"}</div>
          <div className="movie-details-seasons">{`Seasons: ${
            seasons ? seasons : "3"
          }`}</div>
          <div>{`Release year: ${year ? year : "2020"}`}</div>
        </div>
      </div>
      <div className="movie-details-description">
        {desctiption ||
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet suscipit" +
            "tempore incidunt accusamus quod optio rem odio, magni voluptates quasi" +
            "consectetur illum, iusto delectus neque animi officiis accusantium" +
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet suscipit" +
            "tempore incidunt accusamus quod optio rem odio, magni voluptates quasi" +
            "corporis commodi."}
      </div>
    </div>
  );
};
