import styles from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id.toString()}`}
            state={location}
            className={styles.listItem}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={250}
              alt={movie.title}
            />
            <h3 className={styles.movieName}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
