import React from "react";
import { buildImageUrl } from "../../lib/TMDB_API";
import Image from "../common/Image";
import PosterPlaceholder from "../common/PosterPlaceholder";
import { MovieItemStyled } from "./styles";

function MovieItem({ movie, index }) {
  return (
    <MovieItemStyled to={`/movie/${movie.id}`} index={index}>
      {movie.poster_path ? (
        <Image
          src={buildImageUrl(movie.poster_path, 400)}
          alt={movie.title}
          objectFit="fill"
        />
      ) : (
        <PosterPlaceholder title={movie.title} />
      )}
    </MovieItemStyled>
  );
}

export default React.memo(MovieItem);
