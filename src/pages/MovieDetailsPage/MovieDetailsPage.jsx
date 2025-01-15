import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieById, fetchMovieCast } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  console.log("movieId", movieId);
  console.log("Movie", movie);

  if (!movie) {
    return <p>Loading......</p>;
  }

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.release_date}</p>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
