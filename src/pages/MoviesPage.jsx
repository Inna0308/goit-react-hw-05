import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import toast from "react-hot-toast";

import { getSearch } from "../../api";

import SearchInput from "../components/SearchInput/SearchInput";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("q");

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const data = await getSearch(searchValue);
        setMovies(data);
      } catch (error) {
        toast.error("Error" + error.message);
      }
    };
    fetchSearch();
  }, [searchValue]);

  return (
    <div>
      <SearchInput setSearchParams={setSearchParams} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
