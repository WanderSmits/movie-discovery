import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const [movie, setMovie] = useState([]);
  const location = useParams();

  console.log("what is my location?", location);

  const fetchData = async () => {
    const specific_movie = `http://www.omdbapi.com/?i=${location.imdbID}&apikey=d3a07d28`;
    const response = await axios.get(specific_movie);
    console.log("response", response.data);
    setMovie(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []); // if you want to run this function to be called every time the state changes, put it inside of the []

  return (
    <div>
      <h1>{movie.Title}</h1>
      <h4>{movie.Genre}</h4>
      <img src={movie.Poster} alt="something" />
      <p>{movie.Plot}</p>
    </div>
  );
}
