import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import MovieList from "../components/MovieList";

function MoviesPage() {
  const [showMovies, setShowMovies] = useState(true);

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <button onClick={() => setShowMovies(!showMovies)}>Toggle Movies</button>
      {showMovies && <MovieList></MovieList>}
    </>
  );
}

export default MoviesPage;
