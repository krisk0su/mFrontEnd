import React, { useEffect, useState } from "react";
import axios from "axios";
import { IMovie } from "../Interfaces/IMovie";
import { Embed } from "semantic-ui-react";

export const MovieById = (props: any) => {
  const [movie, setMovie] = useState<IMovie>();
  const { id } = props.match.params;
  const fetchData = async () => {
    const movieRes = await axios(`http://localhost:3000/movies/${id}`);
    const src = movieRes.data.link1
      .split(" ")[1]
      .split("=")[1]
      .replace(/[\""]/g, "");
    console.log("src", src);

    //  console.log("url", url);
    setMovie({ ...movieRes.data, src });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <iframe
      src="https://vidoza.net/embed-umhin8c7xm3d.html"
      width={640}
      height={360}
    ></iframe>
  );
};
{
  /* <IFRAME SRC="https://vidoza.net/embed-umhin8c7xm3d.html" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME> */
}
