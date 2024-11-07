import styles from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className={styles.movie}>
      <img
        className={styles.img}
        src={movie.poster_path ? `${BASE_IMAGE_URL}${movie.poster_path}` : "/api/placeholder/500/750"}
        alt={movie.title}
      />
      <div className={styles.descr}>
        <h2 className={styles.mainTitle}>{movie.title}</h2>
        <p className={styles.text}>
          <span className={styles.title}>Release Date:</span> {movie.release_date}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Overview:</span> {movie.overview}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Genres:</span>{" "}
          <ul>
            {movie.genres.map((genre, id) => (
              <li key={id}>◾ {genre.name}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
