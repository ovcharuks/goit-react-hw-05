import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { trandMoviesFetch } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await trandMoviesFetch();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <h2>Tranding today</h2>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
