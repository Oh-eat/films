import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { MovieItemStyled, PosterReplacementStyled } from "./styles";
import { buildImageUrl } from "../../lib/TMDB_API";
import Image from "../common/Image";

function MovieItem({ movie, index }) {
  return (
    <MovieItemStyled to={`/movie/${movie.id}`} index={index}>
      {movie.poster_path ? (
        <Image
          src={buildImageUrl(movie.poster_path, 500)}
          alt={movie.title}
          position="absolute"
          objectFit="fill"
        />
      ) : (
        <PosterReplacement title={movie.title} />
      )}
    </MovieItemStyled>
  );
}

function PosterReplacement({ title }) {
  return (
    <PosterReplacementStyled>
      <h3>{title}</h3>
      <MdLocalMovies size="75%" />
    </PosterReplacementStyled>
  );
}

export default React.memo(MovieItem);
