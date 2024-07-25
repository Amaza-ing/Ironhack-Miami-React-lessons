import "./MovieCard.css";

function MovieCard(props) {
  const { movie, deleteMovie } = props;

  return (
    <li className="movie-card">
      <h3>{movie.title}</h3>
      <img src={movie.img} alt="picture img" className="movie-img" />
      <p>{movie.duration}</p>
      <button onClick={() => deleteMovie(movie)}>🗑</button>
    </li>
  );
}

export default MovieCard;
