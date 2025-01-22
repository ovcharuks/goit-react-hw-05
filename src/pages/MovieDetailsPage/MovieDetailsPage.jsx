import styles from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById, fetchMovieCast } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackLink = useRef(location.state || "/");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  console.log("goBackLink", goBackLink);

  if (!movie) {
    return <p>Loading......</p>;
  }

  return (
    <>
      <Link to={goBackLink.current}>Go back</Link>
      <img
        className={styles.movieImage}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p>{movie.release_date}</p>
      <nav className={styles.nav}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
