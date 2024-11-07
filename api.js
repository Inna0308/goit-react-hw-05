import axios from "axios";

const moviesInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmY1YTc3NjAyOGQ0YTUxMTNiNzkzNmQyODc0MWY4ZCIsIm5iZiI6MTczMDg5ODkwOS42OTQ1MTA3LCJzdWIiOiI2NzJiNmE3ZDU1MDgyMDljZjdhZDIzM2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s_y8v6MLHss8WkmsC_rMRpZMLROSwPQaVfrc3geaqWc",
  },
});

export const getMovies = async () => {
  const response = await moviesInstance.get("/trending/movie/day", {
    params: {
      limit: 20,
    },
  });
  return response.data.results;
};

export const getMovieById = async (id) => {
  const response = await moviesInstance.get(`/movie/${id}`);

  return response.data;
};

export const getMovieCast = async (id) => {
  const response = await moviesInstance.get(`/movie/${id}/credits`);

  return response.data.cast;
};

export const getMovieReview = async (id) => {
  const response = await moviesInstance.get(`/movie/${id}/reviews`);

  return response.data.results;
};

export const getSearch = async (searchValue) => {
  const response = await moviesInstance.get("/search/movie", {
    params: {
      include_adult: "false",
      query: searchValue,
    },
  });
  return response.data.results;
};
