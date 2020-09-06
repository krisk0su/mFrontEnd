import React from "react";
import { SearchSection } from "../../search-section/search-section";
import { Carousel } from "react-responsive-carousel";
import { MovieInfo } from "./movie-info/movie-info";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./index-header.scss";

export const IndexHeader = () => {
  return (
    <Carousel>
      <div>
        <img
          src="https://wallpapercave.com/wp/wp2266150.jpg"
          height="750em"
          width="100vw"
        />
        <MovieInfo
          title={"AMERICAN GANGSTER"}
          age={"18+"}
          seasons={"2"}
          description={
            "Lorem ipsum is simply dummy text of the printing and typesetting" +
            "indsutry> Lorem Ipsum has been the indsutry's staandard dummy text " +
            "ever since the 1500s."
          }
        />
      </div>
      <div>
        <img
          src="https://wallpaperaccess.com/full/788693.jpg"
          height="750em"
          width="100vw"
        />
        <MovieInfo
          title={"AQUAMAN"}
          age={"14+"}
          seasons={"0"}
          description={
            "Lorem ipsum is simply dummy text of the printing and typesetting" +
            "indsutry> Lorem Ipsum has been the indsutry's staandard dummy text " +
            "ever since the 1500s."
          }
        />
      </div>
      <div>
        <img
          src="https://wallpapercave.com/wp/Ciw293N.jpg"
          height="750em"
          width="100vw"
        />
        <MovieInfo
          title={"SOME BULLSHIT"}
          age={"16+"}
          seasons={"0"}
          description={
            "Lorem ipsum is simply dummy text of the printing and typesetting" +
            "indsutry> Lorem Ipsum has been the indsutry's staandard dummy text " +
            "ever since the 1500s."
          }
        />
      </div>
    </Carousel>
    // <div className="header-wrapper">

    //   <div className="header">
    //     <div className="description-wrapper">
    //       <div>
    //         <h1>All Your Streaming Services</h1>
    //         <h2>in One Place</h2>
    //         <p>
    //           Your Streaming Movies and TV Guide. Track, discover and find where
    //           to watch TV Shows and movies from Netflix, Amazon Prime, Hulu,
    //           Showtime and over 100 more servies.
    //         </p>
    //         <div>
    //           <button className="action-btn">HOW IT WORKS</button>
    //           <button className="action-btn">START A WATCH LIST</button>
    //         </div>
    //       </div>
    //     </div>
    //     <SearchSection />
    //   </div>
    // </div>
  );
};
