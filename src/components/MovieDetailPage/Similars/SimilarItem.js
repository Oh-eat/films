import React from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import PosterPlaceholder from "../../common/PosterPlaceholder";
import Image from "../../common/Image";
import { SimilarItemStyled } from "./styles";

function SimilarItem({ similar }) {
  return (
    <SimilarItemStyled
      className="click-action"
      to={`/movie/${similar.id}`}
      alt={similar.title}
    >
      {similar.poster_path ? (
        <Image objectFit="fill" src={buildImageUrl(similar.poster_path, 400)} />
      ) : (
        <PosterPlaceholder title={similar.title} />
      )}
    </SimilarItemStyled>
  );
}

export default SimilarItem;
