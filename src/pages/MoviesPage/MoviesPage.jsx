import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { searchMoviesFetch } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviePage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      const data = await searchMoviesFetch(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  const onSubmit = ({ query }) => {
    if (!query) {
      alert("enter movie name");

      return;
    }
    setSearchParams({ query });
  };

  const initialValues = {
    query: "",
  };

  return (
    <>
      <h2>Find your movie</h2>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.searchContainer}>
          <Field name="query" className={styles.input} />
          <button type="submit">Search movie</button>
        </Form>
      </Formik>

      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
