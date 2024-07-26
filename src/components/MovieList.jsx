import "./MovieList.css";
import MovieCard from "./MovieCard";

import lotrImg from "../assets/lotr.jpg";
import starWarsImg from "../assets/star-wars.jpg";
import duneImg from "../assets/dune.jpg";
import { useEffect, useState } from "react";
import CreateMovie from "./CreateMovie";

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

  const deleteMovie = (movieToDelete) => {
    const filteredMovies = movies.filter(
      (movie) => movie.title !== movieToDelete.title
    );

    setMovies(filteredMovies);
  };

  const createMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const [movies, setMovies] = useState(movieData);

  // useEffect(() => {
  //   console.log("Movie List component mounted");
  // }, [])

  // useEffect(() => {
  //   console.log("Movies state variable updated");
  // }, [movies])

  // useEffect(() => {
  //   return () => {
  //     console.log("Movie List component unmounted");
  //   }
  // }, [])

  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        deleteMovie={deleteMovie}
        key={movie.title}
      ></MovieCard>
    );
  });

  return (
    <section className="movies-section">
      <CreateMovie createMovie={createMovie}></CreateMovie>
      <h2>Movies:</h2>
      <ul className="movie-list">{movieCards}</ul>
    </section>
  );
}

export default MovieList;
