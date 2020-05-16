import React from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import { SimilarItemStyled } from "./styles";
import PosterPlaceholder from "../../common/PosterPlaceholder";
// eslint-disable-next-line
import Image from "../../common/Image";

function SimilarItem({ similar }) {
  return (
    <SimilarItemStyled
      className="click-action"
      to={`/movie/${similar.id}`}
      alt={similar.title}
    >
      {similar.poster_path ? (
        <Image
          objectFit="fill"
          src={buildImageUrl(similar.poster_path, 400)}
          alt=""
          height="150%"
        />
      ) : (
        <PosterPlaceholder title={similar.title} />
      )}
    </SimilarItemStyled>
  );
}

export default SimilarItem;
