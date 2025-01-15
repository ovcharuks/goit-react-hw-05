import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../services/api";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState();

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
  return <h3>Reviews</h3>;
};

export default MovieReviews;
