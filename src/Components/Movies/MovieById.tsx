import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { IMovie } from "../Interfaces/IMovie";
import { Embed } from "semantic-ui-react";

export const MovieById = (props: any) => {
  const [movie, setMovie] = useState<IMovie>();
  const { id } = props.match.params;
  const fetchData = async () => {
    const movieRes = await axios(`http://localhost:3000/movies/${id}`);


    setMovie(movieRes.data);
    console.log("dasdsad", movieRes.data)
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/RFuKsDMF-_0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <iframe
        src={movie && movie.link1}
        width={640}
        height={360}
      ></iframe>
    </Fragment>

  );
};
{
  /* <IFRAME SRC="https://vidoza.net/embed-umhin8c7xm3d.html" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME> */
}
