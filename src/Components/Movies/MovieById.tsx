import React, { useEffect, useState } from "react";
import axios from "axios";
import { IMovie } from "../Interfaces/IMovie";

export const MovieById = (props: any) => {
  const [movie, setMovie] = useState<IMovie>();
  const { id } = props.match.params;
  const fetchData = async () => {
    const movieRes = await axios(`http://localhost:3000/movies/${id}`);
    setMovie(movieRes.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <h1>hi from MovieById</h1>;
};
