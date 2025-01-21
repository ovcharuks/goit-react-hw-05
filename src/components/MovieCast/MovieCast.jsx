import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    if (movieId) {
      getData();
    }
  }, [movieId]);

  if (!cast) {
    return <p>Loading......</p>;
  }
  return (
    <>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              width={75}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Сharacter: {actor.character}</p>
          </li>
        ))}
      </ul>
      <h3>Cast</h3>
    </>
  );
};

export default MovieCast;
