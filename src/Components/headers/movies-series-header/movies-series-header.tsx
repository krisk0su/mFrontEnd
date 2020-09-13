import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./movies-series-header.scss";
import { MovieInfoShort } from "../index-header/movie-info/additional-movie-info";

export const MoviesSeriesHeader = () => {
  return (
    <div className="movies-series-wrapper">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={35}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div>
              <Image
                src="https://wallpaperaccess.com/full/1076854.jpg"
                hasMasterSpinner={false}
                isBgImage={true}
              />
              <MovieInfoShort title="AVATAR" age={"15"} seasons={"3"} />
            </div>
          </Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack className="arrow arrow-back">
          <i className="fas fa-arrow-left"></i>
        </ButtonBack>
        <ButtonNext className="arrow arrow-next">
          <i className="fas fa-arrow-right"></i>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};
