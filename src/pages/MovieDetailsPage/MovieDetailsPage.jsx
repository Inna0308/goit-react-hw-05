import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";

import { getMovieById } from "../../../api";

import MovieDetails from "../../components/MovieDetails/MovieDetails";

import toast from "react-hot-toast";

import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const data = await getMovieById(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
        toast.error("Error");
      }
    };
    fetchMovieById();
  }, [movieId]);

  const backUrl = location.state?.from || "/movies";
  const goBack = () => navigate(backUrl);

  return (
    <div>
      <button className={styles.btn} onClick={goBack}>
        Go Back
      </button>
      {movie !== null && <MovieDetails movie={movie} />}
      <div className={styles.details}>
        <NavLink state={{ from: backUrl }} className={styles.link} to={`/movies/${movieId}/cast`}>
          Cast
        </NavLink>
        <NavLink state={{ from: backUrl }} className={styles.link} to={`/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
