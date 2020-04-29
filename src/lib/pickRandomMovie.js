export default function pickRandomMovie(movies) {
  const randomIndex = Math.floor((Math.random() * 100) / 5);
  return movies[randomIndex];
}
