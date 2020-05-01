import React, { useEffect } from "react";
import { MovieGridStyled } from "./styles";
import MovieItem from "./MovieItem";

function MovieGrid({ movies }) {
  useEffect(() => {
    document.getElementById("scrollbar").scrollTo({ top: 0 });
  }, [movies]);
  return (
    <MovieGridStyled>
      {movies.map((movie, index) => (
        <MovieItem key={movie.id} movie={movie} index={index} />
      ))}
    </MovieGridStyled>
  );
}

export default MovieGrid;
