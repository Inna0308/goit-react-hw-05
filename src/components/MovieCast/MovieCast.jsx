import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCast } from "../../../api";

import toast from "react-hot-toast";

import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovies = async () => {
      try {
        const data = await getMovieCast(movieId);
        console.log(data);
        setCast(data.slice(0, 8));
      } catch (error) {
        console.log(error.message);
        toast.error("Error");
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <ul className={styles.list}>
        {cast !== null &&
          cast.map((actor) => {
            return (
              <div key={actor.id} className={styles.card}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : "/api/placeholder/500/750"
                  }
                  alt={actor.name}
                  className={styles.img}
                />
                <ul>
                  <li className={styles.name}>{actor.name}</li>
                  <li className={styles.role}>{actor.character}</li>
                </ul>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
