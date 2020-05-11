import React from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import { SimilarSlideStyled } from "./styles";
import PosterPlaceholder from "../../common/PosterPlaceholder";
// eslint-disable-next-line
import Image from "../../common/Image";

function SimilarSlide({ similar }) {
  return (
    <SimilarSlideStyled
      className="swiper-slide click-action"
      to={`/movie/${similar.id}`}
      alt={similar.title}
    >
      {similar.poster_path ? (
        <img src={buildImageUrl(similar.poster_path, 300)} alt="" />
      ) : (
        // <Image
        //   src={buildImageUrl(similar.poster_path, 400)}
        //   alt=""
        //   height="150%"
        // />
        <PosterPlaceholder title={similar.title} />
      )}
    </SimilarSlideStyled>
  );
}

export default SimilarSlide;
