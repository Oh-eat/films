export default function pickRandomMovie(movies, currentBackgroundPath) {
  let movie;
  while (!movie || movie.backdrop_path === currentBackgroundPath) {
    let randomIndex = Math.floor((Math.random() * 100) / 5);
    movie = movies[randomIndex === 20 ? 19 : randomIndex];
  }
  return movie;
}
