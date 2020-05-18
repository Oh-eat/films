import React from "react";
import MovieItem from "./MovieItem";
import { MovieGridStyled } from "./styles";

function MovieGrid({ movies }) {
  return (
    <MovieGridStyled>
      {movies.map((movie, index) => (
        <MovieItem key={movie.id} movie={movie} index={index} />
      ))}
    </MovieGridStyled>
  );
}

export default MovieGrid;
