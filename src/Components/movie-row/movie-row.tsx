import React from "react";
// import { SlickNextArrow } from "./slick-arrows/slick-next-arrow";
// import { SlickPrevArrow } from "./slick-arrows/slick-prev-arrow";
import { Movie } from "../movie/movie";
import Slider from "react-slick";
import "./movie-row.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MovieRow = (props: any) => {
  const { movies, title } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // nextArrow: <SlickNextArrow />,
    // prevArrow: <SlickPrevArrow />,
  };
  return (
    <div className={`movie-row`}>
      <h2>{title}</h2>

      <div className="movies">
        <Slider {...settings}>
          <Movie
            imageUrl={
              "https://vignette.wikia.nocookie.net/breakingbad/images/0/00/BB_S2_poster.jpg/revision/latest?cb=20170524134840"
            }
            title="Breaking Bad"
            age="16"
            seasons="5"
          />
          <Movie
            imageUrl={
              "https://cdn.shopify.com/s/files/1/0051/8959/9321/products/Peaky-Blinders2_7f9fc2cc-4088-4d58-b972-09efa58c6405_grande.png?v=1569064675"
            }
            title="Peaky Blinders"
            age="16"
            seasons="4"
          />
          <Movie
            imageUrl={
              "https://images-na.ssl-images-amazon.com/images/I/51lJhFFRoSL._AC_.jpg"
            }
            title="Vikings"
            age="16"
            seasons="5"
          />
          <Movie
            imageUrl={
              "https://static.displate.com/280x392/displate/2020-04-05/9f20da6def180562a2f2c64e9f4b47b5_94e3b0f06e86281422af6ce783041408.jpg"
            }
            title="Money Heist"
            age="16"
            seasons="6"
          />
          <Movie
            imageUrl={
              "https://vignette.wikia.nocookie.net/breakingbad/images/0/00/BB_S2_poster.jpg/revision/latest?cb=20170524134840"
            }
          />
        </Slider>
      </div>
    </div>
  );
};
