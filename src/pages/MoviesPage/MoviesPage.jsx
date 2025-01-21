import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { searchMoviesFetch } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

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
      <h2>Movies page</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search movie</button>
        </Form>
      </Formik>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
