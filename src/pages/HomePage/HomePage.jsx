import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { trandMoviesFetch } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css";

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
      <h2 className={styles.header}>Tranding today</h2>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
