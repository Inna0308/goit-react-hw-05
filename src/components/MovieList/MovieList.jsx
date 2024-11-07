import { Link, useLocation } from "react-router-dom";

import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  console.log(movies);

  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li className={styles.item} key={movie.id}>
          <Link state={{ from: location }} className={styles.link} key={movie.id} to={`/movies/${movie.id}`}>
            <img
              className={styles.img}
              src={movie.poster_path ? `${BASE_IMAGE_URL}${movie.poster_path}` : "/api/placeholder/500/750"}
              alt={movie.title}
            />
            <p className={styles.title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
