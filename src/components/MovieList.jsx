import "./MovieList.css";
import MovieCard from "./MovieCard";

import lotrImg from "../assets/lotr.jpg";
import starWarsImg from "../assets/star-wars.jpg";
import duneImg from "../assets/dune.jpg";
import { useState } from "react";

function MovieList() {
  const movieData = [
    {
      title: "Lord the Rings",
      duration: 200,
      img: lotrImg,
    },
    {
      title: "Star Wars",
      duration: 120,
      img: starWarsImg,
    },
    {
      title: "Dune",
      duration: 150,
      img: duneImg,
    },
  ];

  const [movies, setMovies] = useState(movieData);

  const movieCards = movies.map((movie) => {
    return (
      <MovieCard movie={movie} key={movie.title}></MovieCard>
    )
  })

  const deleteLastMovie = () => {
    // const moviesCopy = movies.map((movie) => movie);
    const moviesCopy = [...movies];

    moviesCopy.pop();
    setMovies(moviesCopy);
  }

  return (
    <section className="movies-section">
      <h2>Movies:</h2>
      <ul className="movie-list">
        {movieCards}
      </ul>
      <button onClick={deleteLastMovie}>Delete last movie</button>
    </section>
  );
}

export default MovieList;
