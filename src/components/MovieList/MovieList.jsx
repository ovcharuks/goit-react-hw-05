import { Link } from "react-router-dom";
const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id.toString()}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
