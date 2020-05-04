import axios from "axios";

const API_KEY = "212712643a7c2fa54ed2a27a65a622d7";
const NOW_PLAYING = "now_playing";
const POPULAR = "popular";
const TOP_RATED = "top_rated";
const UPCOMING = "upcoming";

const buildFetchMoviesUrl = (type, page = 1) =>
  `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=ko-KR&page=${page}`;

export const getNowPlaying = (page = 1) =>
  axios.get(buildFetchMoviesUrl(NOW_PLAYING, page));
export const getPopular = (page = 1) =>
  axios.get(buildFetchMoviesUrl(POPULAR, page));
export const getTopRated = (page = 1) =>
  axios.get(buildFetchMoviesUrl(TOP_RATED, page));
export const getUpcoming = (page = 1) =>
  axios.get(buildFetchMoviesUrl(UPCOMING, page));
export const getSimilar = (movieId, page = 1) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=ko-KR&page=${page}`
  );
export const getDetail = (movieId) =>
  axios
    .all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      ),
    ])
    .then((data) => ({ data }));
export const getImages = (movieId) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}`
  );
export const getVideos = (movieId) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );
export const getCredit = (movieId) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
export const getFurtherDetail = (movieId) =>
  axios
    .all([
      getDetail(movieId),
      getImages(movieId),
      getVideos(movieId),
      getCredit(movieId),
      getSimilar(movieId),
    ])
    .then((data) => ({ data }));

export const buildImageUrl = (path, size = 500) => {
  return `
      https://image.tmdb.org/t/p/${
        typeof size === "number" ? `w${size}` : size
      }${path}`;
};
