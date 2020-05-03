import React from "react";
import MovieDetailPageBodyContainer from "../containers/MovieDetailPageBodyContainer";

function MovieDetailPage({ match }) {
  const { movieId } = match.params;
  return <MovieDetailPageBodyContainer movieId={movieId} />;
}

export default MovieDetailPage;
