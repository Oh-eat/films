import React from "react";
import { MovieItemStyled } from "./styles";
import { buildImageUrl } from "../../lib/TMDB_API";
import Image from "../common/Image";
import PosterPlaceholder from "../common/PosterPlaceholder";

function MovieItem({ movie, index }) {
  return (
    <MovieItemStyled to={`/movie/${movie.id}`} index={index}>
      {movie.poster_path ? (
        <Image
          src={buildImageUrl(movie.poster_path, 400)}
          alt={movie.title}
          position="absolute"
          objectFit="fill"
        />
      ) : (
        <PosterPlaceholder title={movie.title} />
      )}
    </MovieItemStyled>
  );
}

export default React.memo(MovieItem);
