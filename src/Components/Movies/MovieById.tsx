import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { IMovie } from "../Interfaces/IMovie";
import { Embed, Image, Grid, Header } from "semantic-ui-react";

export const MovieById = (props: any) => {
  const [movie, setMovie] = useState<IMovie>();
  const { id } = props.match.params;
  const fetchData = async () => {
    const movieRes = await axios(`http://localhost:3000/movies/${id}`);

    setMovie(movieRes.data);
    console.log("dasdsad", movieRes.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={movie && movie.poster} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as="h1">{movie && movie.title}</Header>
            <Header as="h4">{movie && movie.plot}</Header>
            <Header as="h5">{movie && movie.actors}</Header>
            <Header as="h5">{movie && movie.genre}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <iframe
        width="720"
        height="520"
        src="https://www.youtube.com/embed/RFuKsDMF-_0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        src={movie && movie.link1}
        width={640}
        height={360}
        allowFullScreen
      ></iframe>
    </Fragment>
  );
};
{
  /* <IFRAME SRC="https://vidoza.net/embed-umhin8c7xm3d.html" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME> */
}
