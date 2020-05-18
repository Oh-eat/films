import { isEmptyArray } from "./isEmpty";

export default function pickRandomMovie(movies, currentBackgroundPath) {
  if (isEmptyArray(movies)) return { backdrop_path: null };
  let movie;
  const moviesWithBackdrop = movies.filter((movie) => movie.backdrop_path);
  while (
    !movie ||
    (moviesWithBackdrop.length > 1 &&
      movie.backdrop_path === currentBackgroundPath)
  ) {
    let randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
    movie =
      moviesWithBackdrop.length > 0
        ? moviesWithBackdrop[randomIndex]
        : movies[0];
  }
  return movie;
}
