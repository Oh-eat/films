import React from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import { SimilarItemStyled } from "./styles";
import PosterPlaceholder from "../../common/PosterPlaceholder";

function SimilarItem({ similar }) {
  return (
    <SimilarItemStyled
      className="swiper-slide click-action"
      to={`/movie/${similar.id}`}
      alt={similar.title}
    >
      {similar.poster_path ? (
        <img src={buildImageUrl(similar.poster_path, 400)} alt="" />
      ) : (
        <PosterPlaceholder title={similar.title} />
      )}
    </SimilarItemStyled>
  );
}

export default SimilarItem;
