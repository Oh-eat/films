const API_KEY = "212712643a7c2fa54ed2a27a65a622d7";
const NOW_PLAYING = "now_playing";
const POPULAR = "popular";
const TOP_RATED = "top_rated";
const UPCOMING = "upcoming";

const buildFetchMoviesUrl = (type, page = 1) =>
  `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=ko-KR&region=KR&page=${page}`;

const fetchMovies = (type, page = 1) => {
  const url = buildFetchMoviesUrl(type, page);
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json.results);
};

export const fetchNowPlayingMovies = (page = 1) => {
  return fetchMovies(NOW_PLAYING, page);
};

export const fetchPopularMovies = (page = 1) => {
  return fetchMovies(POPULAR, page);
};

export const fetchTopRatedMovies = (page = 1) => {
  return fetchMovies(TOP_RATED, page);
};

export const fetchUpcomingMovies = (page = 1) => {
  return fetchMovies(UPCOMING, page);
};

export const fetchSimilarMovies = (movieId, page = 1) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json.results);
};

export const fetchMovieDetail = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR&append_to_response=videos,images`;
  return fetch(url).then((response) => response.json());
};

export const buildImageUrl = (path, size = 500) => {
  return `
    https://image.tmdb.org/t/p/${
      typeof size === "number" ? `w${size}` : size
    }${path}`;
};
