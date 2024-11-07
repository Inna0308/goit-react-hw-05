import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieReview } from "../../../api";

import toast from "react-hot-toast";

import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReview] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovies = async () => {
      try {
        const data = await getMovieReview(movieId);
        console.log(data);
        setReview(data.slice(0, 8));
      } catch (error) {
        console.log(error.message);
        toast.error("Error");
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div className={styles.comment}>
      {reviews.length === 0 ? (
        <p className={styles.noReviews}>No reviews found for this movie 😵</p>
      ) : (
        reviews.map((comment) => (
          <div key={comment.id} className={styles.commentText}>
            <p className={styles.name}>{comment.author}</p>
            <p className={styles.text}>{comment.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieReviews;
