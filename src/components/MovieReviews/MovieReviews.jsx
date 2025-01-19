import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../services/api";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieReview(movieId);
        setReview(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getData();
  }, [movieId]);

  console.log("review", review);
  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map((item) => (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p>{item.updated_at.slice(0, 10)}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No review yet</p>
      )}
    </>
  );
};

export default MovieReviews;
