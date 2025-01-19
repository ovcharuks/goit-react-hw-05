import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { searchMoviesFetch } from "../../services/api";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const onSubmit = (values) => {
    console.log("onSubmit Values", values.query);
    handleChangeQuery(values.query);
  };

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const filterMovies = movies.filter((movie) => {
    movie.title.toLowerCase().includes(query.toLowerCase());
  });
  const initialValues = {
    query: "",
  };

  useEffect(() => {
    const getData = async () => {
      const data = await searchMoviesFetch(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  console.log("MoviesPage -> movies:", movies);
  return (
    <>
      <h2>Movies page</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search movie</button>
        </Form>
      </Formik>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`}>
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
    </>
  );
};

export default MoviesPage;
