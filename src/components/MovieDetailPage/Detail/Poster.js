import React from "react";
import Image from "../../common/Image";
import { buildImageUrl } from "../../../lib/TMDB_API";
import { PosterStyled } from "./styles";

function Poster({ posterPath }) {
  return (
    <PosterStyled>
      <Image basis="height" src={buildImageUrl(posterPath, 400)} />
    </PosterStyled>
  );
}

export default Poster;
