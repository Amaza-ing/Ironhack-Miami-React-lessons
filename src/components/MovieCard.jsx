function MovieCard(props) {
  const { movie } = props;

  return (
    <li className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.duration}</p>
    </li>
  );
}

export default MovieCard;
