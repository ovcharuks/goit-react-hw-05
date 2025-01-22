import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import MovieCast from "./components/MovieCast/MovieCast";
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
import MovieReviews from "./components/MovieReviews/MovieReviews";

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback="Loading......." />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
