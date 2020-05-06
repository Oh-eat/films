import React from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import Image from "../../common/Image";
import { PosterStyled } from "./styles";

function Poster({ posterPath }) {
  return (
    posterPath && (
      <PosterStyled>
        <Image
          objectFit="contain"
          basis="height"
          src={buildImageUrl(posterPath, "original")}
        />
      </PosterStyled>
    )
  );
}

export default Poster;
