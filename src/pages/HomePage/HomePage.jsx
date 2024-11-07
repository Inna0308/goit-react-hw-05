import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";

import { getMovies } from "../../../api";

import toast from "react-hot-toast";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error.message);
        toast.error("Error");
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
