import React, { useState, useEffect } from "react";
import axios from "axios";

export const Movies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get("http://localhost:3000/movies/all")
      .then((res: any) => console.log("res", res));
  });
  return <h1>Here will be displayd all the movies...</h1>;
};
