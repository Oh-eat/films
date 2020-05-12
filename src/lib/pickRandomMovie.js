export default function pickRandomMovie(movies, currentBackgroundPath) {
  let movie;
  const moviesWithBackdrop = movies.filter((movie) => movie.backdrop_path);
  while (
    !movie ||
    (moviesWithBackdrop.length > 1 &&
      movie.backdrop_path === currentBackgroundPath)
  ) {
    let randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
    movie = movies[randomIndex];
  }
  return movie;
}
