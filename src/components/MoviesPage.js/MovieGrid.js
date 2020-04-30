import React from "react";
import { MovieGridStyled } from "./styles";
import MovieItem from "./MovieItem";

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
