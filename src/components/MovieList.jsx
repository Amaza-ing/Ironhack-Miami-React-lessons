import "./MovieList.css";
import MovieCard from "./MovieCard";

function MovieList() {
  const movies = [
    {
      title: "Lord the Rings",
      duration: 200,
    },
    {
      title: "Star Wars",
      duration: 120,
    },
    {
      title: "Dune",
      duration: 150,
    },
  ];

  return (
    <section className="movies-section">
      <h2>Movies:</h2>
      <ul className="movie-list">
        <MovieCard movie={movies[0]}></MovieCard>
        <MovieCard movie={movies[1]}></MovieCard>
        <MovieCard movie={movies[2]}></MovieCard>
      </ul>
    </section>
  );
}

export default MovieList;
