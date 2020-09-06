import React from "react";
import { Movie } from "../movie/movie";
import "./movie-row.scss";

export const MovieRow = (props: any) => {
  const { movies, title } = props;
  return (
    <div className={`movie-row`}>
      <h2>{title}</h2>
      <div className="movies">
        <Movie
          imageUrl={
            "https://vignette.wikia.nocookie.net/breakingbad/images/0/00/BB_S2_poster.jpg/revision/latest?cb=20170524134840"
          }
        />
        <Movie
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0051/8959/9321/products/Peaky-Blinders2_7f9fc2cc-4088-4d58-b972-09efa58c6405_grande.png?v=1569064675"
          }
        />
        <Movie
          imageUrl={
            "https://images-na.ssl-images-amazon.com/images/I/51lJhFFRoSL._AC_.jpg"
          }
        />
        <Movie
          imageUrl={
            "https://static.displate.com/280x392/displate/2020-04-05/9f20da6def180562a2f2c64e9f4b47b5_94e3b0f06e86281422af6ce783041408.jpg"
          }
        />
      </div>
    </div>
  );
};
