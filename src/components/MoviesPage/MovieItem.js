import React from "react";
import { MovieItemStyled } from "./styles";
import { buildImageUrl } from "../../lib/TMDB_API";

function MovieItem({ movie, index }) {
  return (
    <MovieItemStyled to={`/movie/${movie.id}`} index={index}>
      <img
        src={movie.poster_path ? buildImageUrl(movie.poster_path, 400) : ""}
        alt={movie.title}
      />
    </MovieItemStyled>
  );
}

export default React.memo(MovieItem);
