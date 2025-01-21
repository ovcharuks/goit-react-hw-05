import { Link, useLocation } from "react-router-dom";
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id.toString()}`} state={location}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={250}
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
